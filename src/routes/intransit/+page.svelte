<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
	import ImageContainer from "./ImageContainer.svelte";
</script>

<NavMenu
	currentPage="In Transit"
	breadcrumbs={[
		{ name: "Releases", destination: "/releases" },
		{ name: "PT-A7", destination: "/releases/pt-a7" },
	]}
/>

<div id="container">
	<div id="content">
		<ImageContainer imageFileName="in-transit-photo-series-1.jpg" date="2020-20-20" name="pt-a7-img1" description="ISO 50 / F1.4 / S1/120" />
		<ImageContainer imageFileName="in-transit-photo-series-1.jpg" date="2020-20-20" name="pt-a7-img1" description="ISO 50 / F1.4 / S1/120" />
	</div>
</div>

<svelte:head>
	<title>In Transit - Pedestrian Tactics</title>
	<style>
		:root {
			--color-fg: black;
			--color-bg: white;
		}
	</style>
</svelte:head>

<style>
	#container {
		max-width: 960px;
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}

	#content {
		padding: 2rem;
	}
</style>
