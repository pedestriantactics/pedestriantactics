
export let prerender = false;

export async function load(data: unknown) {
    const allPostFiles = import.meta.glob("./releases/*.md");
    const iterablePostFiles = Object.entries(allPostFiles)

    const allPosts = await Promise.all(
        iterablePostFiles.map(async ([path, resolver]) => {
            const { metadata } = await resolver() as {
				// we only need the data for the grid
                metadata: {
					formattedDate: Date, 
                    title: string, 
					category: string, 
					code: string, 
					audioType: string, 
					recordLabel: string, 
					images: string[],
					imageContrast: boolean
                }
            };

            const postPath = path.replace('./', '').replace('.md', '')
        
            if (!metadata) {
                // log to the console
                throw new Error(`No metadata found for ${path}`);
            }

            return {
				formattedDate: metadata.formattedDate,
                title: metadata.title || "",
                category: metadata.category || "",
                code: metadata.code || "",
                audioType: metadata.audioType || "",
                recordLabel: metadata.recordLabel || "",
                images: metadata.images || [],
				imageContrast: metadata.imageContrast || false,
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