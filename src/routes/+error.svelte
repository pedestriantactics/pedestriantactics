<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
	<title>404 - Pedestrian Tactics</title>
</svelte:head>

<NavMenu currentPage="404" breadcrumbs={[]} />

<div id="container">
	<div>
	<h1>404</h1>
</div>
</div>

<style>
	#container {
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}
</style>
