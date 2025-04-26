<script lang="ts">
	import NavMenu from "$lib/NavMenu.svelte";

	export let data: {
		content: any;
		formattedDate: Date;
		title: string;
		code: string;
		images: string[];
		imageContrast: boolean;
		linksTitle: string;
		links: { title: string; url: string }[];
		details: { title: string; description: string }[];
		priceUSD: string;
		environment: string;
	};

	let breakpoint = 800;

	let currentImage = 0;

	function showNextImage() {
		currentImage = (currentImage + 1) % data.images.length;
	}

	function showPreviousImage() {
		currentImage =
			(currentImage - 1 + data.images.length) % data.images.length;
	}

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
	<!-- {#if data.description}
		<meta name="description" content="{data.title}: {data.description}" />
	{:else}
		<meta name="description" content={data.title} />
	{/if} -->
</svelte:head>

<NavMenu
	currentPage={currentPage}
	breadcrumbs={[{ name: "Releases", destination: "/releases" }]}
/>

<div id="container">
	<div id="content">
		<div class="row split-content">
			<div class="mobile-hide"></div>
			<div class="row-2-1">
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
					src="/images/{data.images[currentImage]}"
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
			<div>
				<div class="row">
					<h2>{data.title}</h2>
					<p class="large-paragraph">
						<svelte:component this={data.content} />
					</p>
				</div>
				<!-- if there are details add them -->
				{#if data.details}
					<div class="row">
						{#each data.details as detail}
							<div class="row-1-2">
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
						<div class="row-1-2">
							<p>{#if data.linksTitle}{data.linksTitle}{:else}Links{/if}</p>
							<div>
								{#each data.links as link}
									<a class="arrow-link" href={link.url}
										>{link.title}</a
									>
									<br>
								{/each}
							</div>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<style>
	#container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#content {
		max-width: 960px;
		padding: var(--outer-margin);
	}

	.row {
		width: 100%;
		margin-bottom: var(--vertical-gap);
	}

	/* this collapses with mobile */
	.split-content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: var(--grid-gap);
	}

	.row-2-1 {
		display: grid;
		grid-template-columns: 2fr 1fr;
		gap: var(--grid-gap);
	}

	.row-1-2 {
		display: grid;
		grid-template-columns: 1fr 2fr;
		gap: var(--grid-gap);
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
	@media (max-height: 700px) {
		#container {
			align-items: flex-start;
			margin-top: var(--top-margin);
		}
	}

	@media (max-width: 800px) {
		#container {
			align-items: flex-start;
			margin-top: var(--top-margin);
		}
		.split-content {
			grid-template-columns: 1fr;
		}
		.mobile-hide {
			display: none;
		}
	}
</style>
