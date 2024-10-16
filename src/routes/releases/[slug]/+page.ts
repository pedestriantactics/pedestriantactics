export const prerender = true;

export async function load({ params }: { params: { slug: string } }) {
    const post = await import(`../${params.slug}.md`)
    const { title, code, formattedDate, description, images, links, details, price } = post.metadata
    const content = post.default

    return {
        content,
        title,
        code,
        formattedDate,
        description,
        images,
		links,
		details,
		price
    }
}