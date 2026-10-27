import { fetchContent } from '#lib/utils/index.js';
import { getLocale } from '#lib/paraglide/runtime.js';
import type { TrainingModule } from '#lib/types.js';

const posts = import.meta.glob<TrainingModule>('/content/trainingen/*.md');

export async function load({ depends, params }) {
	depends('paraglide:lang');
	const loadPost =
		posts[`/content/trainingen/${params.training_title}.${getLocale()}.md`] ??
		posts[`/content/trainingen/_.${getLocale()}._.md`];
	const post = await loadPost();

	const { title, img, alt, springest, description } = post.metadata;
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
		img,
		alt,
		springest,
		description,
		surroundingDocuments
	};
}

/** @type {import('./$types').EntryGenerator} */
export async function entries() {
	// During SSG, generate entries for all locales
	const { locales } = await import('#lib/paraglide/runtime.js');
	const allEntries = [];

	for (const locale of locales) {
		const posts = await fetchContent('trainingen', locale);
		allEntries.push(...posts.map((post) => ({ training_title: post.path })));
	}

	return allEntries;
}

export const prerender = true;
