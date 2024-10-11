export const prerender = false;

export async function load({ params }: { params: { slug: string } }) {
    const post = await import(`../${params.slug}.md`)
    const { title, code, date, description, images } = post.metadata
    const content = post.default

    return {
        content,
        title,
        code,
        date,
        description,
        images
    }
}