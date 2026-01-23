<script lang="ts">
	import NavMenu from "$lib/NavMenu.svelte";

	export let data: {
		content: any;
		formattedDate: Date;
		title: string;
		description?: string;
		code: string;
		images: string[];
		previewImageURL: string;
		imageContrast: boolean;
		linksTitle: string;
		links: { title: string; url: string }[];
		details: { title: string; description: string }[];
		priceUSD: string;
		environment: string;
	};

	// let breakpoint = 800;

	let currentImage = 0;

	function showNextImage() {
		currentImage = (currentImage + 1) % data.images.length;
	}

	function showPreviousImage() {
		currentImage =
			(currentImage - 1 + data.images.length) % data.images.length;
	}

	let currentImagePath = `/images/${data.images[currentImage]}`;

	let navTitle = data.title;
	if (data.code) navTitle = data.code;

	let metaTitle = data.title;
	if (data.code) metaTitle = `${data.code} ${metaTitle}`;

	function formatDate(date: Date): string {
		return date.toString().split("T")[0];
	}

	// get the current url portion of this
	let url = "";
	let currentPage = "";
	if (typeof window !== "undefined") {
		url = window.location.href;
		const urlParts = url.split("/");
		currentPage = urlParts[urlParts.length - 1];
	}
</script>

<svelte:head>
    <title>{metaTitle} - Pedestrian Tactics</title>

    {#if data.description}
        <meta name="description" content={data.description} />
    {:else}
        <meta name="description" content={data.title} />
    {/if}

    <meta property="og:title" content={metaTitle + ' - Pedestrian Tactics'} />
    <meta property="og:description" content={data.description ?? data.title} />
    {#if data.images && data.images.length > 0}
        <meta property="og:image" content={data.previewImageURL} />
    {/if}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={metaTitle + ' - Pedestrian Tactics'} />
    <meta name="twitter:description" content={data.description ?? data.title} />
    {#if data.images && data.images.length > 0}
        <meta name="twitter:image" content={data.previewImageURL} />
    {/if}
</svelte:head>

<NavMenu
	{currentPage}
	breadcrumbs={[{ name: "Releases", destination: "/releases" }]}
/>

<div id="container">
	<div id="content" class="rows">
		<div class="row split-content">
			<div class="mobile-hide"></div>
			<div class="inner-row-2-1">
				<p>
					{#if data.code}{data.code}{:else}{formatDate(
							data.formattedDate,
						)}{/if}
				</p>
				<p>
					{#if data.code}{formatDate(data.formattedDate)}{/if}
				</p>
			</div>
		</div>
		<div class="row split-content">
			<div>
				<img
					src={currentImagePath}
					alt={data.title}
					class:image-contrast={data.imageContrast}
				/>
				<!-- add an if statement to generate the image nav if there is more than one image -->
				{#if data.images.length > 1}
					<div id="image-nav">
						{#each data.images as image, i}
							<p>
								<a
									class="unstyled-link"
									style="cursor: pointer;"
									class:active={i === currentImage}
									on:click={() => (currentImage = i)}
								>
									IMG{i + 1}
								</a>
							</p>
						{/each}
					</div>
				{/if}
			</div>
			<div class="rows">
				<div class="row">
					<h2 class="animate">{data.title}</h2>
					{#if data.description}
					<p class="large-paragraph">
						<!-- <svelte:component this={data.content} /> -->
						 {data.description}
					</p>
					{/if}
				</div>
				<!-- if there are details add them -->
				{#if data.details}
					<div class="row">
						{#each data.details as detail}
							<div class="inner-row-1-2">
								<p>{detail.title}</p>
								<p>{detail.description}</p>
							</div>
						{/each}
					</div>
				{/if}
				<!-- price -->
				{#if data.priceUSD}
					<div class="row">
						<p>{data.priceUSD}USD</p>
					</div>
				{/if}
				<!-- links -->
				{#if data.links}
					<div class="row">
						<div class="inner-row-1-2">
							<p>
								{#if data.linksTitle}{data.linksTitle}{:else}Links{/if}
							</p>
							<div class="arrow-links">
								{#each data.links as link}
									<a href={link.url}>{link.title}</a>
									<br />
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
 -->
<style>
	#content {
		max-width: 960px;
	}

	/* this collapses with mobile */
	.split-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: calc(var(--vertical-gap) / 2);
	}

	#image-nav a:hover,
	#image-nav a.active {
		border-bottom: 1px solid;
	}

	img {
		width: 100%;
		margin-bottom: 1rem;
	}

	#image-nav {
		width: 100%;
		display: flex;
		/* height: 50px; */
	}

	/* make each link have --spacer on the right */
	#image-nav a {
		margin-right: 1em;
	}

	/* set the shop container to 1 column when the screen is smaller than the mobile threshold */
	@media (max-width: 800px) {
		.split-content {
			grid-template-columns: 1fr;
		}
		.mobile-hide {
			display: none;
		}
	}

	@media (max-width: 800px) and (max-height: 1050px), (max-height: 750px) {
		#container {
			align-items: flex-start;
			margin-top: var(--top-margin);
			height: auto;
		}
	}
</style>
