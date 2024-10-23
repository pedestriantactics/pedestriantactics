<script>
	export var imageFileName = "";
	export var date = "";
	export var name = "";
	export var description = "";
</script>

<div id="image-container">
	<img alt={name} src="images/{imageFileName}" />
	<div id="image-footer">
		<p class="caption mono">{date}</p>
		<p></p>
		<p></p>
		<p class="caption mono">{name}</p>
		<p class="caption mono">{description}</p>
	</div>
</div>

<style>
	#image-container {
		 margin-bottom: 3rem;
	}
	#image-footer {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	}
	img {
		width: 100%;
		margin-bottom: 1rem;
	}
</style>
