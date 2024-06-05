import { fetchContent } from '$lib/utils';

export async function load({ params }) {
	const post = await import(`$content/coaching/${params.coaching_title}.md`);
	const { title, date, img } = post.metadata;
	const content = post.default;

	const allPosts = await fetchContent('coaching');
	const sortedPosts = allPosts.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);

	const currentIndex = sortedPosts.findIndex((p) => p.path === params.coaching_title);
	const surroundingDocuments = sortedPosts
		.slice(Math.max(0, currentIndex - 5), currentIndex)
		.concat(sortedPosts.slice(currentIndex + 1, currentIndex + 6));

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
	const allPosts = await fetchContent('coaching');
	return allPosts.map((post) => ({ coaching_title: post.path }));
}

export const prerender = true;
