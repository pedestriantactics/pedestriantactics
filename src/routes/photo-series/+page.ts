export let prerender = false;

export async function load() {
    // Retrieve all images from the specified path
    const allImageFiles = import.meta.glob("/static/images/photo-series/*.{jpg,jpeg,png}");
    // Convert the object to an array of strings that represent the URL to each image
    const allImages = Object.keys(allImageFiles).map((path) => path.replace("/static", ""));

    console.log(allImages);

    // Return the array of image paths
    return { loadedImages: allImages };
}