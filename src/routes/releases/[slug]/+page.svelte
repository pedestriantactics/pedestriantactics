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

<div id="new-container">
	<div id="new-content">
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
		<!-- title -->
		<div id="code-and-title" class="large-only">
			{#if data.code}
				<h2 id="archive-code">{data.code}</h2>
			{/if}
			<h2 id="title">{data.title}</h2>
		</div>
		<!-- info area -->
		<div id="info">
			{#if data.description}
				<p id="description">
					{data.description}
				</p>
			{/if}
			<div id="details-and-links">
				{#if data.details}
					<div id="details">
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
					<div class="details-and-links grid">
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
				{/if}
			</div>
			<div class="small-only">
				<!-- TODO: find a way to store this universally -->
				<p>
					Designed and assembled in various coffee shops and
					workspaces
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.small-only {
		display: none;
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
		grid-area: titl;
	}

	#archive-code {
		grid-column: span 1;
	}

	#title {
		grid-column: span 3;
	}

	#archive-code + #title {
		grid-column: 2 / 4;
	}

	#info {
		display: grid;
		grid-template-columns: subgrid;
		grid-area: info;
	}

	#description {
		grid-column: span 3;
	}

	#details-and-links {
		display: grid;
		grid-template-columns: subgrid;
		grid-column: span 3;
		grid-template-rows: auto;
		row-gap: var(--grid-gap);
	}

	#details {
		display: grid;
		grid-template-columns: subgrid;
		grid-template-rows: auto;
		grid-column: span 3;
		row-gap: 0;
	}

	.detail-title {
		grid-column: span 1;
	}

	.detail-description {
		grid-column: span 2;
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
		/* height: 50px; */
	}

	/* make each link have --spacer on the right */
	#image-nav a {
		margin-right: 1em;
	}

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

	@media (max-width: 920px) {
		#image-and-info {
			grid-template-columns: 1fr 1fr;
		}

		#code-and-title {
			grid-template-columns: 1fr 3fr;
		}

		.details-and-links {
			grid-template-columns: 1fr 3fr;
		}
	}

	@media (max-width: 820px) {
		#code-and-title {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 720px) {
		.details-and-links {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 580px) {
		.small-only {
			display: block;
		}
		.large-only {
			display: none;
		}

		#image-and-info {
			grid-template-columns: 1fr;
			gap: var(--vertical-gap);
		}

		#code-and-title {
			grid-template-columns: 1fr 3fr;
		}

		.details-and-links {
			grid-template-columns: 1fr 3fr;
		}
	}

	@media (max-width: 450px) {
		#code-and-title {
			grid-template-columns: 1fr;
		}
	}
</style>
