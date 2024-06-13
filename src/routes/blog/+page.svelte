<script lang="ts">
	import type { BlogModule, ImageModule, Blog } from '$lib/types';
	import { languageTag } from '$lib/paraglide/runtime.js';

	const imageModules = import.meta.glob(
		'$content/blog/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}',
		{
			eager: true,
			query: {
				enhanced: true
			}
		}
	) as Record<string, ImageModule>;

	const blogModulesNl = import.meta.glob(`$content/blog/*.nl.md`, {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, BlogModule>;
	const blogModulesEn = import.meta.glob(`$content/blog/*.en.md`, {
		eager: true,
		query: {
			enhanced: true
		}
	}) as Record<string, BlogModule>;

	const blogModulesMap = {
		en: blogModulesEn,
		nl: blogModulesNl
	};
	const blogModules = blogModulesMap[languageTag()];

	function formatDate(date: string) {
		const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
		return new Date(date).toLocaleDateString('en', options);
	}

	const blogs: Blog[] = Object.entries(blogModules)
		.map(([path, module]) => ({
			path: path.replace(/\.(nl|en)\.md$/, ''),
			name:
				path
					.replace(/\.(nl|en)\.md$/, '')
					.split('/')
					.pop() || '',
			meta: module.metadata,
			content: module.default
		}))
		.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
</script>

<template lang="pug">
    div
      .jumbotron.jumbotron-fluid.yep-geel
        .row.justify-content-around
          h1 Blog
      .container.mt-4.mb-4.larger
        +each('blogs as blog')
          .card.mt-2.overflow-hidden.shadow-none.p-4(style="border: 1px solid #ddd; border-radius: 0.25rem;")
            .row.no-gutters
              .col-lg-3.col-md-4
                .square-img-container
                  enhanced:img.square-img.rounded-circle(sizes="min(1280px, 100vw)" src="{imageModules[`/content/blog/${blog.meta.img}`].default}" alt="{blog.meta.alt}")
              .col-lg-9.col-md-8(style="display: flex; flex-direction: column; justify-content: center;")
                .card-body(style="display: flex; flex-direction: column; justify-content: center;")
                  h2.card-title {blog.meta.title}
                  .card-text
                    small.text-muted {formatDate(blog.meta.date)}
                    p {blog.meta.intro}
              a.stretched-link.font-bold(href=`/blog/{blog.name}`)
</template>
