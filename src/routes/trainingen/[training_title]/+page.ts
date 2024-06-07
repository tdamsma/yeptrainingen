import { fetchContent } from '$lib/utils';
import { languageTag } from '$lib/paraglide/runtime.js';
export async function load({ depends, params }) {
	depends("paraglide:lang");
	let post;
	try {
		post = await import(`$content/trainingen/${params.training_title}.${languageTag()}.md`);
	} catch (error) {
		post = await import(`$content/trainingen/_.${languageTag()}._.md`);
	}

	const { title, date, img, springest } = post.metadata;
	const content = post.default;

	const allPosts = await fetchContent('trainingen', languageTag());
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
		springest,
		surroundingDocuments
	};
}

export const prerender = true;
