export const prerender = false;

export async function load({ params }: { params: { slug: string } }) {
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

	let previewImageURL = null
	if (images && images.length > 0) {
		previewImageURL = "/images/" + images[0]
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