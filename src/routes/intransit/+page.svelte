<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
	import ImageContainer from "$lib/GalleryImageContainer.svelte";
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
		<div id="intro">
			<p class="mono">2017-03-30</p>
			<p class="type">
				In Transit photo series <br />
				Shot during travels in Hong Kong.
				<a href="./releases/pt-a7">Get the EP here.</a>
			</p>
		</div>
		<ImageContainer
			imageFileName="in-transit-photo-series-1.jpg"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-2.jpg"
			date="2017-03-29"
			name="IMG_1450"
			description="ISO100 18mm F10 1/10s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-3.jpg"
			date="2017-03-29"
			name="IMG_1323"
			description="ISO100 18mm F22 1/10s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-4.jpg"
			date="2017-03-30"
			name="IMG_1623"
			description="ISO100 20mm F9 1/125s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-5.jpg"
			date="2017-03-29"
			name="IMG_1548"
			description="ISO320 30mm F4.5 1/30s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-6.jpg"
			date="2017-03-28"
			name="IMG_1291"
			description="ISO1600 18mm F3.5 1/80s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-7.jpg"
			date="2017-03-30"
			name="IMG_1755"
			description="ISO100 55mm F11 1/4s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-8.jpg"
			date="2017-03-30"
			name="pt-a7-img8"
			description="ISO100 55mm F11 1/10s"
		/>
		<ImageContainer
			imageFileName="in-transit-photo-series-10.jpg"
			date="2017-03-30"
			name="pt-a7-img9"
			description="ISO100 18mm F8 1/8s"
		/>
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
