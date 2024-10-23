<script>
	export var imageFileName = "";
	export var date = "";
	export var name = "";
	export var description = "";
</script>

<div id="gallery-image-container">
	<div>
		<div id="gallery-image-wrapper">
			<img alt={name} src="images/{imageFileName}" />
		</div>
		<div id="gallery-image-footer">
			<p class="caption mono">{name}</p>
			<p class="caption mono">
				{description}
			</p>
		</div>
	</div>
</div>

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
</style>
