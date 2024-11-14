<script>
	import { onMount } from 'svelte';
	import EXIF from 'exif-js';
	import ImageContainer from "$lib/GalleryImageContainer.svelte";
  
	let images = [];
	const sourceFolder = '/path/to/your/images/folder';
  
	async function loadImages() {
	  const response = await fetch(sourceFolder);
	  const imageFiles = await response.json();
  
	  for (const file of imageFiles) {
		const image = new Image();
		image.src = `${sourceFolder}/${file}`;
		image.onload = () => {
		  EXIF.getData(image, function() {
			const exifData = EXIF.getAllTags(this);
			images = [
			  ...images,
			  {
				imageFileName: file,
				date: exifData.DateTimeOriginal,
				name: exifData.ImageDescription || file,
				description: `ISO${exifData.ISOSpeedRatings} ${exifData.FocalLength}mm F${exifData.FNumber} ${exifData.ExposureTime}s`
			  }
			];
		  });
		};
	  }
	}
  
	onMount(() => {
	  loadImages();
	});
  </script>
  
  <div id="intro">
	<p class="mono">Photo Gallery</p>
	<p class="type">Images loaded from folder with EXIF data</p>
  </div>
  
  {#each images as image}
	<ImageContainer
	  {imageFileName}
	  {date}
	  {name}
	  {description}
	/>
  {/each}