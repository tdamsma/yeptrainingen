import { fetchContent } from '$lib/utils';
import { getLocale } from '$lib/paraglide/runtime.js';
import type { BlogPost } from '$lib/types';

export async function load({ depends, params }) {
	depends('paraglide:lang');
	let post;
	try {
		post = await import(`$content/blog/${params.blog_title}.${getLocale()}.md`);
	} catch (error) {
		post = await import(`$content/blog/_.${getLocale()}._.md`);
	}
	const { title, date, img, alt } = post.metadata;
	const content = post.default;

	const allPosts: BlogPost[] = await fetchContent('blog', getLocale());
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
	);

	const currentIndex = sortedPosts.findIndex((p) => p.path === params.blog_title);
	const surroundingDocuments = sortedPosts
		.slice(Math.max(0, currentIndex - 3), currentIndex)
		.concat(sortedPosts.slice(currentIndex + 1, currentIndex + 4));

	return {
		content,
		title,
		date,
		img,
		alt,
		surroundingDocuments
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	// During SSG, generate entries for all locales
	const { locales } = await import('$lib/paraglide/runtime.js');
	const allEntries = [];

	for (const locale of locales) {
		const posts = await fetchContent('blog', locale);
		allEntries.push(...posts.map((post) => ({ blog_title: post.path })));
	}

	return allEntries;
}

export const prerender = true;
