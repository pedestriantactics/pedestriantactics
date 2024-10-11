<script lang="ts">
	import GridElement from "./GridElement.svelte";
	import { onMount } from "svelte";
	import { page } from "$app/stores";

	$: filter = $page.url?.searchParams?.get("filter") ?? "all";

	export let data: {
		posts: {
			postPath: string;
			title: string;
			code: string;
			category: string;
			date: string;
			images: string[];
		}[];
	};

	$: filteredPosts = data.posts.filter((post) => {
		if (filter === "all") return true;
		if (filter === "physical") return post.category === "physical";
		if (filter === "downloadable") return post.category === "downloadable";
		if (filter === "music") return post.category === "music";
		return false;
	}) as (typeof data)["posts"];

	let metaTitle = "Products";
</script>

<svelte:head>
	<title>{metaTitle} - Pedestrian Tactics</title>
</svelte:head>

<!-- render the filter links and the grid -->
<div id="filter-container">
	<h3>
		<a href="?filter=all" class:active={filter === "all"}>All</a>
		<a href="?filter=physical" class:active={filter === "physical"}
			>Physical</a
		>
		<a href="?filter=downloadable" class:active={filter === "downloadable"}
			>Downloadable</a
		>
		<a href="?filter=music" class:active={filter === "music"}>Audio</a>
	</h3>
</div>

<div id="grid-container">
	{#each filteredPosts as post}
		<GridElement
			postPath={post.postPath}
			code={post.code}
			title={post.title}
			image={post.images[0]}
		/>
	{:else}
		<p>No posts found.</p>
	{/each}
</div>

<style>
	#grid-container {
		display: grid;
		grid-gap: 1em;
		grid-template-columns: 1fr 1fr 1fr;
	}

	#filter-container {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		height: 50px;
	}

	/* make each link have --spacer on the right */
	#filter-container a {
		margin-right: 1em;
	}

	/* change grid to two columns when max width changes */
	@media (max-width: 900px) {
		#grid-container {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 500px) {
		#grid-container {
			grid-template-columns: 1fr;
		}
	}
</style>
