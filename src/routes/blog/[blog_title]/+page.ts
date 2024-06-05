import { fetchContent } from '$lib/utils';
import type { BlogPost } from '$lib/types';

export async function load({ params }) {
	const post = await import(`$content/blog/${params.blog_title}.md`);
	const { title, date, img } = post.metadata;
	const content = post.default;

	const allPosts: BlogPost[] = await fetchContent('blog');
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

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	const allPosts = await fetchContent('blog');
	return allPosts.map((post) => ({ blog_title: post.path }));
}

export const prerender = true;
