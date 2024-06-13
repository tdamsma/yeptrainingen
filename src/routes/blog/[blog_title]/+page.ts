import { fetchContent } from '$lib/utils';
import { languageTag } from '$lib/paraglide/runtime.js';
import type { BlogPost } from '$lib/types';

export async function load({ depends, params }) {
	depends('paraglide:lang');
	let post;
	try {
		post = await import(`$content/blog/${params.blog_title}.${languageTag()}.md`);
	} catch (error) {
		post = await import(`$content/blog/_.${languageTag()}._.md`);
	}
	const { title, date, img } = post.metadata;
	const content = post.default;

	const allPosts: BlogPost[] = await fetchContent('blog', languageTag());
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
		surroundingDocuments
	};
}

export const prerender = true;
