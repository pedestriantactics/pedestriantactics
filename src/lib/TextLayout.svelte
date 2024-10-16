<svelte:head>
	<title>{title} - Pedestrian Tactics</title>
</svelte:head>

<script lang="ts">
	// import Layout from './BaseLayout.svelte';
	// import Header from '$lib/Header.svelte';
	export let title = '';
	// export let slot;
</script>

<!-- <Layout>
<Header />
<div id="md-text"> -->
	<slot />
<!-- </div>
</Layout> -->
