import { fetchContent } from '$lib/utils';
import { getLocale } from '$lib/paraglide/runtime.js';
export async function load({ depends, params }) {
	depends('paraglide:lang');
	let post;
	try {
		post = await import(`$content/trainingen/${params.training_title}.${getLocale()}.md`);
	} catch (error) {
		post = await import(`$content/trainingen/_.${getLocale()}._.md`);
	}

	const { title, date, img, alt, springest } = post.metadata;
	const content = post.default;

	const allPosts = await fetchContent('trainingen', getLocale());
	const sortedPosts = allPosts.sort((a, b) => a.meta.volgnummer - b.meta.volgnummer);

	const currentIndex = sortedPosts.findIndex((p) => p.path === params.training_title);
	const surroundingDocuments = sortedPosts
		.slice(Math.max(0, currentIndex - 5), currentIndex)
		.concat(sortedPosts.slice(currentIndex + 1, currentIndex + 6));

	return {
		content,
		title,
		date,
		img,
		alt,
		springest,
		surroundingDocuments
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	// During SSG, generate entries for all locales
	const { locales } = await import('$lib/paraglide/runtime.js');
	const allEntries = [];

	for (const locale of locales) {
		const posts = await fetchContent('trainingen', locale);
		allEntries.push(...posts.map((post) => ({ training_title: post.path })));
	}

	return allEntries;
}

export const prerender = true;
