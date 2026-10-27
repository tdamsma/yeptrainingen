<script lang="ts">
	import { formatDate } from '#lib/utils/index.js';
	import type { BlogMeta, ImageModule, Blog } from '#lib/types.js';
	import { getLocale, localizeHref } from '#lib/paraglide/runtime.js';
	import { page } from '$app/state';

	const imageModules = import.meta.glob(
		'/content/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{ eager: true, query: { enhanced: true } }
	) as Record<string, ImageModule>;
	const blogModulesNl = import.meta.glob(`/content/blog/*.nl.md`, {
		eager: true,
		import: 'metadata'
	}) as Record<string, BlogMeta>;
	const blogModulesEn = import.meta.glob(`/content/blog/*.en.md`, {
		eager: true,
		import: 'metadata'
	}) as Record<string, BlogMeta>;
	const blogModulesMap = { en: blogModulesEn, nl: blogModulesNl };

	let blogs = $derived(
		(() => {
			// Access page.url to make this reactive to route changes
			const _ = page.url.pathname;
			const blogModules = blogModulesMap[getLocale()];

			return Object.entries(blogModules)
				.filter(([path]) => !path.includes('_._')) // Filter out fallback 404 files
				.map(([path, metadata]) => ({
					path: path.replace(/\.(nl|en)\.md$/, ''),
					name:
						path
							.replace(/\.(nl|en)\.md$/, '')
							.split('/')
							.pop() || '',
					meta: metadata
				}))
				.filter((blog) => blog.meta?.date) // Filter out any posts without a date
				.sort((a, b) => {
					const dateA = a.meta?.date ? new Date(a.meta.date).getTime() : 0;
					const dateB = b.meta?.date ? new Date(b.meta.date).getTime() : 0;
					return dateB - dateA;
				});
		})()
	);
</script>

<div>
	<div class="jumbotron jumbotron-fluid yep-geel">
		<div class="row justify-content-around">
			<h1>Blog</h1>
		</div>
	</div>
	<div class="container mt-4 mb-4 larger">
		{#each blogs as blog}
			<div
				class="card mt-2 overflow-hidden shadow-none p-4"
				style="border: 1px solid #ddd; border-radius: 0.25rem;"
			>
				<div class="row no-gutters">
					<div class="col-lg-3 col-md-4">
						<div class="square-img-container">
							<enhanced:img
								class="square-img rounded-circle"
								sizes="min(1280px, 100vw)"
								src={imageModules[`/content/blog/${blog.meta.img}`].default}
								alt={blog.meta.alt}
							></enhanced:img>
						</div>
					</div>
					<div
						class="col-lg-9 col-md-8"
						style="display: flex; flex-direction: column; justify-content: center;"
					>
						<div
							class="card-body"
							style="display: flex; flex-direction: column; justify-content: center;"
						>
							<h2 class="card-title">{blog.meta.title}</h2>
							<div class="card-text">
								<small class="text-muted">{formatDate(blog.meta.date)}</small>
								<p>{blog.meta.intro}</p>
							</div>
						</div>
					</div>
					<a
						class="stretched-link font-bold"
						href={localizeHref(`/blog/${blog.name}`)}
						aria-label="Read {blog.meta.title}"
					>
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
