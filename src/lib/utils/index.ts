import type { AvailableLanguageTag } from '$lib/paraglide/runtime.js';
const importPathsNl = {
    blog: import.meta.glob('$content/blog/*.nl.md'),
    coaching: import.meta.glob('$content/coaching/*.nl.md'),
    opdrachtgevers: import.meta.glob('$content/opdrachtgevers/*.nl.md'),
    team: import.meta.glob('$content/team/*.nl.md'),
    trainingen: import.meta.glob('$content/trainingen/*.nl.md')
};
const importPathsEn = {
    blog: import.meta.glob('$content/blog/*.en.md'),
    coaching: import.meta.glob('$content/coaching/*.en.md'),
    opdrachtgevers: import.meta.glob('$content/opdrachtgevers/*.en.md'),
    team: import.meta.glob('$content/team/*.en.md'),
    trainingen: import.meta.glob('$content/trainingen/*.en.md')
};

const importPathsMap = {
    nl: importPathsNl,
    en: importPathsEn
};


type ValidCategory = 'blog' | 'coaching' | 'opdrachtgevers' | 'team' | 'trainingen';

export const fetchContent = async (category: ValidCategory, language: AvailableLanguageTag) => {
    const importPaths = importPathsMap[language];
    const allPostFiles = importPaths[category];
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.replace(`/content/${category}/`, '').replace(`.${language}.md`, '');
            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts;
};
