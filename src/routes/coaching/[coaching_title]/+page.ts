import { fetchContent } from '#lib/utils/index.js';
import { getLocale } from '#lib/paraglide/runtime.js';
import type { CoachingModule } from '#lib/types.js';

const posts = import.meta.glob<CoachingModule>('/content/coaching/*.md');

export async function load({ depends, params }) {
	depends('paraglide:lang');

	const loadPost =
		posts[`/content/coaching/${params.coaching_title}.${getLocale()}.md`] ??
		posts[`/content/coaching/_.${getLocale()}._.md`];
	const post = await loadPost();
	const { title, img, alt } = post.metadata;
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
		img,
		alt,
		surroundingDocuments
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	// During SSG, generate entries for all locales
	const { locales } = await import('#lib/paraglide/runtime.js');
	const allEntries = [];

	for (const locale of locales) {
		const posts = await fetchContent('coaching', locale);
		allEntries.push(...posts.map((post) => ({ coaching_title: post.path })));
	}

	return allEntries;
}

export const prerender = true;
