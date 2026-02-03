<script lang="ts">
	import GridElement from "./GridElement.svelte";
	import NavMenu from "$lib/NavMenu.svelte";
	import { page } from "$app/stores";
	import Byline from "$lib/Byline.svelte";

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
			imageContrast: boolean;
		}[];
	};

	$: filteredPosts = data.posts.filter((post) => {
		if (filter === "all") return true;
		if (filter === "physical") return post.category === "physical";
		if (filter === "downloadable") return post.category === "downloadable";
		if (filter === "audio") return post.category === "audio";
		return false;
	}) as (typeof data)["posts"];
</script>

<svelte:head>
	<title>Pedestrian Tactics</title>
</svelte:head>

<NavMenu />

<div id="container">
	<div id="content">
		<!-- render the filter links and the grid -->
		<!-- <p id="breadcrumb" ><a href="/">pedestrian tactics</a> / releases</p> -->
		<div id="filter-container">
			<a
				class="unstyled-link"
				href="?filter=all"
				class:active={filter === "all"}>All</a
			>
			<a
				class="unstyled-link"
				href="?filter=audio"
				class:active={filter === "audio"}>Audio</a
			>
			<a
				class="unstyled-link"
				href="?filter=downloadable"
				class:active={filter === "downloadable"}>Downloadable</a
			>
			<a
				class="unstyled-link"
				href="?filter=physical"
				class:active={filter === "physical"}>Physical</a
			>
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
					imageContrast={post.imageContrast}
				/>
			{:else}
				<p>No posts found.</p>
			{/each}
		</div>
	</div>
	<div class="small-only">
		<p class="animate">
			<Byline />
		</p>
	</div>
</div>

<style>
	.small-only {
		grid-column: 2 / -1;
		display: none;
	}

	/* #filter-container a:hover,
	#filter-container a:focus,
	#filter-container a.active {
		text-decoration: underline;
		text-underline-offset: 0.2em;
	} */

	#container {
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		padding: var(--outer-margin);
		position: relative;
		margin-top: calc(var(--nav-height) + var(--vertical-gap));
		width: calc(100% - 2 * var(--outer-margin));
		height: auto;
	}

	#content {
		max-width: 100%;
		display: flex;
		flex-direction: column;
		gap: var(--grid-gap);
	}

	#grid-container {
		display: grid;
		grid-gap: var(--grid-gap);
		grid-template-columns: repeat(4, 1fr);
	}

	#filter-container {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		gap: var(--spacer);
	}

	#filter-container a.active::before {
		content: "→";
	}

	/* change grid to two columns when max width changes */
	@media (max-width: 900px) {
		#grid-container {
			grid-template-columns: 1fr 1fr;
		}
	}
	@media (max-width: 580px) {
		#filter-container {
			flex-direction: column;
			align-items: flex-start;
			gap: 0;
		}

		#grid-container {
			grid-template-columns: 1fr;
		}

		.small-only {
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: var(--grid-gap);
		}

		.small-only p {
			grid-column: 2 / -1;
		}
	}
</style>
