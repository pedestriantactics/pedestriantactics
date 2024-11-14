<script lang="ts">
	import { onMount } from "svelte";
	import NavMenu from "$lib/NavMenu.svelte";
	import ExifReader from "exifreader";

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

		constructor(src: string) {
			this.src = src;
			this.name =
				src
					.split("/")
					.pop()
					?.replace(/\.[^/.]+$/, "") || "";
			this.focalLength = "";
			this.iso = "";
			this.fstop = "";
			this.shutterspeed = "";
		}

		async loadExifData() {
			return new Promise<void>((resolve, reject) => {
				const img = new Image();
				img.src = this.src;
				img.onload = async () => {
					try {
						const response = await fetch(this.src);
						const arrayBuffer = await response.arrayBuffer();
						const tags = ExifReader.load(arrayBuffer);

						this.focalLength = tags.FocalLength
							? `${tags.FocalLength.value}`
							: "";
						this.iso = tags.ISOSpeedRatings
							? `ISO${tags.ISOSpeedRatings.value}`
							: "";
						this.fstop = tags.FNumber
							? `f${tags.FNumber.value}`
							: "";
						this.shutterspeed = tags.ExposureTime
							? `${tags.ExposureTime.value}s`
							: "";
						resolve();
					} catch (error) {
						console.error(
							`Failed to load EXIF data for ${this.src}:`,
							error,
						);
						reject(error);
					}
				};
				img.onerror = () => {
					console.error(`Failed to load image at ${this.src}`);
					reject(new Error(`Failed to load image at ${this.src}`));
				};
			});
		}
	}

	let images: ImageData[] = [];
	let exifLoaded = false;

	onMount(async () => {
		images = data.loadedImages.map((src) => new ImageData(src));

		// Load EXIF data for all images
		await Promise.all(images.map((image) => image.loadExifData()));

		// Mark EXIF data as loaded
		exifLoaded = true;

		// Log the loaded images for debugging
		console.log(images);
	});
</script>

<NavMenu
	currentPage="Photo Series"
	breadcrumbs={[
	]}
/>

<div id="container">
	<div id="content">
		<div id="intro">
			<p class="mono">2017-03-30</p>
			<p class="type">
				This is a test of an automatically loaded photo series. <br />
				It was generated from a folder of images with the metadata automatically pulled and displayed below each image.
			</p>
		</div>
		{#if exifLoaded}
			{#each images as image}
				<div id="gallery-image-container">
					<div>
						<div id="gallery-image-wrapper">
							<img alt={image.name} src={image.src} />
						</div>
						<div id="gallery-image-footer">
							<p class="caption mono">{image.name}</p>
							<p class="caption mono">
								{image.focalLength} / {image.iso} / {image.fstop}
								/ {image.shutterspeed}
							</p>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
</div>

<svelte:head>
	<title>Photo Series - Pedestrian Tactics</title>
	<style>
		:root {
			--color-fg: black;
			--color-bg: white;
		}
	</style>
</svelte:head>

<style>
	#gallery-image-container {
		width: 100%;
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
	}

	#gallery-image-wrapper {
		width: 100%;
	}

	#gallery-image-footer {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	img {
		max-width: 100%;
		max-height: 640px;
		/* width: 100% auto; */
		margin-bottom: 1rem;
	}

	#container {
		max-width: 960px;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}

	#content {
		margin-top: 8rem;
		padding: 2rem;
	}

	#intro {
		margin-bottom: 3rem;
	}

	p {
		/* font-size: 16pt; */
		margin-bottom: 1em;
	}
</style>
