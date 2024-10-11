
export let prerender = false;

export async function load(data: unknown) {
    const allPostFiles = import.meta.glob("./*.md");
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as {
                metadata: {
                    title: string, category: string, code: string, date: string, images: string[]
                }
            };

            const postPath = path.replace('./', '').replace('.md', '')
        
            if (!metadata) {
                // log to the console
                throw new Error(`No metadata found for ${path}`);
            }

            return {
                title: metadata.title,
                category: metadata.category,
                code: metadata.code,
                date: metadata.date,
                images: metadata.images,
                postPath: postPath,
            };
        }),
    );

    // remove posts that are hidden
    const filteredPosts = allPosts.filter((post) => post.category !== "hide");

    // Sort posts by date
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice();
    return { posts: sortedPosts };
}