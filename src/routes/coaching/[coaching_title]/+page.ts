import { fetchContent } from '$lib/utils';
import { getLocale } from '$lib/paraglide/runtime.js';

export async function load({ depends, params }) {
	depends('paraglide:lang');

	let post;
	try {
		post = await import(`$content/coaching/${params.coaching_title}.${getLocale()}.md`);
	} catch (error) {
		post = await import(`$content/coaching/_.${getLocale()}._.md`);
	}
	const { title, date, img } = post.metadata;
	const content = post.default;

	const allPosts = await fetchContent('coaching', getLocale());
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
	const allPosts = await fetchContent('coaching', getLocale());
	return allPosts.map((post) => ({ coaching_title: post.path }));
}

export const prerender = true;
