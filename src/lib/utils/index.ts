const importPaths = {
    blog: import.meta.glob('$content/blog/*.md'),
    coaching: import.meta.glob('$content/coaching/*.md'),
    opdrachtgevers: import.meta.glob('$content/opdrachtgevers/*.md'),
    team: import.meta.glob('$content/team/*.md'),
    trainingen: import.meta.glob('$content/trainingen/*.md')
};

const validCategories = ['blog', 'coaching', 'opdrachtgevers', 'team', 'trainingen'];

export const fetchContent = async (category) => {
    if (!validCategories.includes(category)) {
        throw new Error('Invalid category');
    }

    const allPostFiles = importPaths[category];
    const iterablePostFiles = Object.entries(allPostFiles);

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver();
            const postPath = path.replace(`/content/${category}/`, '').replace('.md', '');
            return {
                meta: metadata,
                path: postPath
            };
        })
    );

    return allPosts;
};
