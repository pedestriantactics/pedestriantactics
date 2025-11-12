export const prerender = false;

export async function load({ params, url }: { params: { slug: string }, url: URL }) {
	const post = await import(`../${params.slug}.md`)
	const {
		title,
		code,
		formattedDate,
		description,
		images,
		imageContrast,
		linksTitle,
		links,
		details,
		priceUSD,
		environment
	} = post.metadata
	const content = post.default

    let previewImageURL = null;
    if (images && images.length > 0) {
        // build an absolute URL using the server-side origin so SSR meta tags contain a fully qualified URL
        previewImageURL = `${url.origin}/images/${images[0]}`;
		console.log("Preview Image URL:", previewImageURL);
    }

	return {
		content,
		title,
		code,
		formattedDate,
		description,
		images,
		previewImageURL,
		imageContrast,
		linksTitle,
		links,
		details,
		priceUSD,
		environment
	}
}