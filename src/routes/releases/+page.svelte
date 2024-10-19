<script lang="ts">
	import GridElement from "./GridElement.svelte";
	import NavMenu from "$lib/NavMenu.svelte";
	// import { onMount } from "svelte";
	import { page } from "$app/stores";

	$: filter = $page.url?.searchParams?.get("filter") ?? "all";

	export let data: {
		posts: {
			postPath: string;
			title: string;
			code: string;
			category: string;
			audioType: string;
			recordLabel: string;
			formattedDate: Date;
			images: string[];
		}[];
	};

	$: filteredPosts = data.posts.filter((post) => {
		if (filter === "all") return true;
		if (filter === "physical") return post.category === "physical";
		if (filter === "downloadable") return post.category === "downloadable";
		if (filter === "audio") return post.category === "audio";
		return false;
	}) as (typeof data)["posts"];

	let metaTitle = "Products";
</script>

<svelte:head>
	<title>{metaTitle} - Pedestrian Tactics</title>
	<style>
		:root {
			--color-fg: black;
			--color-bg: white;
		}
	</style>
</svelte:head>

<NavMenu
	currentPage="Releases"
	breadcrumbs={[]}
/>

<!-- <div id="nav-bottom">
	<p class="caption mono">
	↘
	<br>
	<a href="/links">Insta</a>
	<br>
	<a href="/bio">Spotify</a>
	<br>
	<a href="/newsletter">Elon</a>
	<br>
	<a href="/newsletter">Contact</a>
	<br>
</p>
</div> -->

<div id="container">
	<!-- render the filter links and the grid -->
	<!-- <p id="breadcrumb" class="caption mono"><a href="/">pedestrian tactics</a> / releases</p> -->
	<div id="filter-container">
		<h3>
			<a href="?filter=all" class:active={filter === "all"}>All</a>
			<a href="?filter=audio" class:active={filter === "audio"}>Audio</a>
			<a
				href="?filter=downloadable"
				class:active={filter === "downloadable"}>Downloadable</a
			>
			<a href="?filter=physical" class:active={filter === "physical"}
				>Physical</a
			>
		</h3>
	</div>

	<div id="grid-container">
		{#each filteredPosts as post}
			<GridElement
				postPath={post.postPath}
				code={post.code}
				title={post.title}
				category={post.category}
				audioType={post.audioType}
				recordLabel={post.recordLabel}
				formattedDate={post.formattedDate}
				image={post.images[0]}
			/>
		{:else}
			<p>No posts found.</p>
		{/each}
	</div>
</div>

<style>
	/* #nav-bottom {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		padding: 2px;
	} */

	#filter-container a:hover,
	#filter-container a:focus,
	#filter-container a.active {
		/* text-decoration: underline; */
		border-bottom: 1px solid var(--color-fg);
	}

	#container {
		max-width: 960px;
		padding: 32px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: auto;
		margin-top: 4rem;
	}

	#grid-container {
		display: grid;
		grid-gap: 8px;
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
		margin-right: .5em;
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
