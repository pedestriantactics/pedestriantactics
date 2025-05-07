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

	return {
		content,
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
	}
}