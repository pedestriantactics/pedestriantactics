<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<NavMenu currentPage="Privacy Policy" breadcrumbs={[]} />

<div id="container">
	<div id="content">
		<slot />
	</div>
</div>

<svelte:head>
	<title>Privacy Policy - Pedestrian Tactics</title>
</svelte:head>

<style>
	#container {
		max-width: 900px;
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 8rem;
	}

	#content {
		padding: 2rem;
	}
</style>
