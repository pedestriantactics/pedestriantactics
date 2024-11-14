<script lang="ts">
    import { onMount } from 'svelte';
	import exif from 'exif-js';

    export let data: {
        loadedImages: string[];
    };

    class ImageData {
        src: string;
        name: string;
        focalLength: string;
        iso: string;
        fstop: string;
        shutterspeed: string;

        constructor() {
            this.src = "";
            this.name = "";
            this.focalLength = "";
            this.iso = "";
            this.fstop = "";
            this.shutterspeed = "";
        }
	}

	let images: ImageData[] = [];

    onMount(() => {
        // turn the image paths into ImageData objects and use exif-js to get the exif data
		images = data.loadedImages.map((src) => {
			const image = new ImageData();
			image.src = src;
			image.name = src.split("/").pop() || "";
			const img = new Image();
			img.src = src;
            img.onload = () => {
                exif.getData(img as any, function(this: any) {
                    var make = exif.getTag(this, "Model");
					console.log(make);
                });
            };
			return image;
		});
    });
</script>

{#each images as image}
    <div id="gallery-image-container">
        <div>
            <div id="gallery-image-wrapper">
                <img src={image.src} alt={image.name} />
            </div>
            <div id="gallery-image-footer">
                <p class="caption mono">{image.name}</p>
                <p class="caption mono">
                    {image.focalLength}, {image.iso}, {image.fstop}, {image.shutterspeed}
                </p>
            </div>
        </div>
    </div>
{/each}

<style>
    #gallery-image-container {
        margin-bottom: 2rem;
    }

    #gallery-image-wrapper {
        text-align: center;
    }

    #gallery-image-footer {
        text-align: center;
    }

    .caption {
        margin: 0;
    }

    .mono {
        font-family: monospace;
    }
</style>