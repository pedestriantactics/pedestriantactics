<script lang="ts">
	import NavMenu from "$lib/NavMenu.svelte";
	import { byline } from "$lib/constants";

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

	let currentImage: number;
	$: currentImage = 0;

	$: currentImagePath = `/images/${data.images[currentImage]}`;

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

	<meta property="og:title" content={metaTitle + " - Pedestrian Tactics"} />
	<meta property="og:description" content={data.description ?? data.title} />
	{#if data.images && data.images.length > 0}
		<meta property="og:image" content={data.previewImageURL} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaTitle + " - Pedestrian Tactics"} />
	<meta name="twitter:description" content={data.description ?? data.title} />
	{#if data.images && data.images.length > 0}
		<meta name="twitter:image" content={data.previewImageURL} />
	{/if}
</svelte:head>

<NavMenu
	{currentPage}
	breadcrumbs={[{ name: "Releases", destination: "/releases" }]}
/>

<div id="new-container" class="animate">
	<div id="new-content" class="animate">
		<!-- small screen title -->

		<!-- image area -->
		<div id="image-container">
			<img
				src={currentImagePath}
				alt={data.title}
				class:image-contrast={data.imageContrast}
			/>
			{#if data.images.length > 1}
				<div id="image-nav">
					{#each data.images as image, i}
						<button
							type="button"
							class="unstyled-link"
							class:active={i === currentImage}
							on:click={() => (currentImage = i)}
							aria-label={`Show image ${i + 1}`}
						>
							IMG{i + 1}
						</button>
					{/each}
				</div>
			{/if}
		</div>
		<!-- title -->
		<div id="code-and-title" class="large-only animate">
			{#if data.code}
				<div id="archive-code">
					<h2 class="archive-code">{data.code}</h2>
				</div>
			{/if}
			<h2 id="title">{data.title}</h2>
		</div>
		<!-- info area -->
		<div id="info" class="animate">
			{#if data.description}
				<p id="description" class="animate">
					{data.description}
				</p>
			{/if}
			{#if data.details}
				<div class="details">
					{#each data.details as detail}
						<p class="detail-title">{detail.title}</p>
						<p class="detail-description">
							{detail.description}
						</p>
					{/each}
				</div>
			{/if}
			<!-- price -->
			{#if data.priceUSD}
				<p id="price">{data.priceUSD}USD</p>
			{/if}
			<!-- links -->
			{#if data.links}
				<div class="details">
					<p class="detail-title">
						{#if data.linksTitle}{data.linksTitle}{:else}Links{/if}
					</p>
					{#each data.links as link}
						<a class="arrow-link detail-description" href={link.url}
							>{link.title}</a
						>
					{/each}
				</div>
			{/if}
			<!-- </div> -->
			<div class="small-only">
				<!-- TODO: find a way to store this universally -->
				<p class="animate">
					{byline}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.small-only {
		display: none;
		grid-column: 2 / -1;
	}

	.large-only {
		display: block;
	}

	#new-container {
		position: fixed;
		top: calc(var(--nav-height) + var(--outer-margin));
		left: var(--outer-margin);
		right: var(--outer-margin);
		bottom: var(--outer-margin);
		align-content: center;
	}

	#new-content {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: min-content 1fr;
		column-gap: var(--grid-gap);
		row-gap: var(--vertical-gap);
		grid-template-areas:
			".    imag imag imag titl titl titl .   "
			".    imag imag imag info info info .   ";
	}

	#image-container {
		grid-area: imag;
	}

	#code-and-title {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: auto;
		row-gap: var(--grid-gap);
		grid-area: titl;
	}

	#archive-code {
		grid-column: 1 / 1;
	}

	#title {
		grid-column: 1 / -1;
	}

	#archive-code + #title {
		grid-column: 2 / -1;
	}

	#info {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: min-content min-content min-content;
		row-gap: 2rem;
		grid-area: info;
	}

	#description {
		grid-column: 1 / -1;
	}

	.details {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: auto;
		grid-column: 1 / -1;
		row-gap: 0;
	}

	.detail-title {
		grid-column: 1 / 2;
	}

	.detail-description {
		grid-column: 2 / -1;
	}

	#price {
		grid-column: 1 / -1;
	}

	#image-nav a:hover,
	#image-nav a.active {
		border-bottom: 1px solid;
	}

	img {
		width: 100%;
		margin-bottom: var(--grid-gap);
	}

	#image-nav {
		width: 100%;
		display: flex;
		gap: var(--grid-gap);
	}

	/* make each link have --spacer on the right */
	#image-nav a {
		margin-right: 1em;
	}

	/* allow scrolling */
	@media (max-height: 600px) or (max-width: 580px) {
		#new-container {
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
	}

	@media (max-width: 1200px) {
		#archive-code {
			grid-column: 1 / -1;
		}

		#archive-code + #title {
			grid-column: 1 / -1;
		}
	}

	@media (max-width: 950px) {
		#new-content {
			grid-template-areas:
				"imag imag imag imag titl titl titl titl"
				"imag imag imag imag info info info info";
		}
	}

	@media (max-width: 580px) {
		#new-content {
			grid-template-columns: repeat(3, 1fr);
			grid-template-areas:
				"titl titl titl"
				"imag imag imag"
				"info info info";
		}

		@media (max-width: 1200px) {
			#archive-code {
				grid-column: 1 / 1;
			}

			#archive-code + #title {
				grid-column: 2 / -1;
			}
		}

		.small-only {
			display: block;
		}

		.large-only {
			display: none;
		}
	}

	@media (max-width: 480px) {
		#archive-code {
			grid-column: 1 / -1;
		}

		#archive-code + #title {
			grid-column: 1 / -1;
		}
	}
</style>
