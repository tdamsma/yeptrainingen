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
	const { title, date, img, alt } = post.metadata;
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
		const posts = await fetchContent('coaching', locale);
		allEntries.push(...posts.map((post) => ({ coaching_title: post.path })));
	}

	return allEntries;
}

export const prerender = true;
