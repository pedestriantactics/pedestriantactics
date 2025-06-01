<script>
	export var imageFileName = "";
	export var date = "";
	export var name = "";
	export var description = "";
	let imageLoaded = false;
</script>

<div class="gallery-image-container {imageLoaded ? 'fade-in' : ''}">
	<div>
		<div id="gallery-image-wrapper">
			<img alt={name} src="images/{imageFileName}" on:load={() => (imageLoaded = true)} />
		</div>
		<div id="gallery-image-footer">
			<p>{name}</p>
			<p>{description}</p>
		</div>
	</div>
</div>

<style>
	.gallery-image-container {
		width: 100%;
		margin-bottom: 3rem;
		display: flex;
		justify-content: center;
		opacity: 0;
		transition: opacity 0s;
	}

	.gallery-image-container.fade-in {
		opacity: 1;
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
</style>
