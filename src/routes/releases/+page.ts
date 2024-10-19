
export let prerender = false;

export async function load(data: unknown) {
    const allPostFiles = import.meta.glob("./*.md");
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as {
                metadata: {
                    title: string, category: string, code: string, audioType: string, recordLabel: string, formattedDate: Date, images: string[]
                }
            };

            const postPath = path.replace('./', '').replace('.md', '')
        
            if (!metadata) {
                // log to the console
                throw new Error(`No metadata found for ${path}`);
            }

            return {
                title: metadata.title || "",
                category: metadata.category || "",
                code: metadata.code || "",
                audioType: metadata.audioType || "",
                recordLabel: metadata.recordLabel || "",
                formattedDate: metadata.formattedDate,
                images: metadata.images || [],
                postPath: postPath,
            };
        }),
    );

    // remove posts that are hidden
    const filteredPosts = allPosts.filter((post) => post.category !== "hide");

    // Sort posts by date
    const sortedPosts = filteredPosts.sort((a, b) => new Date(b.formattedDate).getTime() - new Date(a.formattedDate).getTime()).slice();
    return { posts: sortedPosts };
}