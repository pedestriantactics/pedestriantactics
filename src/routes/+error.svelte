<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<NavMenu currentPage="404" breadcrumbs={[]} />

<div id="container">
	<div>
	<h1>404</h1>
</div>
</div>

<svelte:head>
	<style>
		:root {
			--color-fg: black;
			--color-bg: white;
		}
	</style>
</svelte:head>

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
