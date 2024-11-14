export let prerender = false;

export async function load() {
    // List of image names (without file extensions) to determine the order
    const orderList = ["R0018070", "R0018070"]; // Replace with your actual image names

    // Retrieve all images from the specified path
    const allImageFiles = import.meta.glob("/static/images/photo-series/*.{jpg,jpeg,png}");
    // Convert the object to an array of strings that represent the URL to each image
    const allImages = Object.keys(allImageFiles).map((path) => path.replace("/static", ""));

    console.log(allImages);

    // Separate the images that are in the orderList
    const orderedImages: string[] = [];
    const remainingImages: string[] = [];

    allImages.forEach((image) => {
        const imageName = image.split('/').pop()?.replace(/\.[^/.]+$/, "");
        if (imageName && orderList.includes(imageName)) {
            orderedImages.push(image);
        } else {
            remainingImages.push(image);
        }
    });

    // Sort the orderedImages based on the orderList
    orderedImages.sort((a, b) => {
        const nameA = a.split('/').pop()?.replace(/\.[^/.]+$/, "");
        const nameB = b.split('/').pop()?.replace(/\.[^/.]+$/, "");
        return orderList.indexOf(nameA || "") - orderList.indexOf(nameB || "");
    });

    // Combine the ordered images with the remaining images
    const finalImages = [...orderedImages, ...remainingImages];

    // Return the array of image paths
    return { loadedImages: finalImages };
}