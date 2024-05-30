import { fetchContent } from '$lib/utils';

export async function load({ params }) {
	const post = await import(`$content/trainingen/${params.training_title}.md`);
	const { title, date, img } = post.metadata;
	const content = post.default;

	const allPosts = await fetchContent("trainingen");
	const sortedPosts = allPosts.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);

	const currentIndex = sortedPosts.findIndex(p => p.path === params.training_title);
	const surroundingDocuments = sortedPosts.slice(Math.max(0, currentIndex - 5), currentIndex)
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
	const allPosts = await fetchContent("trainingen");
	return allPosts.map(post => ({ training_title: post.path }));
}

export const prerender = true;