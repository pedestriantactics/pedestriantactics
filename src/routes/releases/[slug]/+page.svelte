<script lang="ts">
	export let data: {
		// metadata: { [key: string]: string };
		title: string;
		code: string;
		formattedDate: Date;
		images: string[];
		links: string[];
		description: string;
		content: any;
		details: string[];
		price: string;
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

	let metaTitle = data.title;
	if (data.code) metaTitle = `${data.code} ${metaTitle}`;

	function formatDate(date: Date): string {
		return date.toString().split("T")[0];
	}
</script>

<svelte:head>
	<title>{metaTitle} - Pedestrian Tactics</title>
	{#if data.description}
		<meta name="description" content="{data.title}: {data.description}" />
	{:else}
		<meta name="description" content={data.title} />
	{/if}
</svelte:head>

<!-- this keeps everything grouped together for the layout -->
<div id="nav-top">
	<p class="caption mono">
		<a href="/">pedestrian tactics</a> / <a href="/releases">Releases</a> / {data.code}
		<br />
		<br />
		<a href="/releases">Releases</a>
		<br />
		<a href="/newsletter">Newsletter</a>
		<br />
		<a href="/links">Links</a>
		<br />
		<a href="/bio">Contact</a>
		<br />
		<br />
	</p>
</div>

<div id="container">
	<div class="grid-row">
		<div class="grid-column">
			<!-- space to line image up with the top -->
			<div class="top-row"></div>
			<div>
				<img
					src="/images/{data.images[currentImage]}"
					alt={data.title}
				/>
				<!-- add an if statement to generate the image nav if there is more than one image -->
				{#if data.images.length > 1}
					<div id="image-nav">
						{#each data.images as image, i}
							<p class="caption mono">
								<a
									style="cursor: pointer;"
									class:active={i === currentImage}
									on:click={() => (currentImage = i)}
								>
									IMG{i + 1}
								</a>
							</p>
						{/each}
						<!-- <a on:click={showPreviousImage}>&lt;</a>
						<a on:click={showNextImage}>&rt;</a> -->
					</div>
				{/if}
			</div>
		</div>
		<div class="grid-column">
			<div class="top-row">
				<p class="caption mono">{data.code}</p>
				<p class="caption mono">{formatDate(data.formattedDate)}</p>
			</div>
			<div class="title-row">
				<h1>
					{data.title}
				</h1>
				<svelte:component this={data.content} />
			</div>
		</div>
	</div>
</div>

<style>
	#nav-top {
		position: fixed;
		top: 1rem;
		left: 1rem;
		padding: 2px;
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

	.top-row {
		display: grid;
		grid-template-columns: 1fr 1fr;
		height: 1em;
	}

	.top-row, img, .title-row {
		margin-bottom: 2rem;
	}

	.grid-row {
		width: 100%;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr 1fr;
		margin-bottom: 2rem;
	}

	#image-nav a:hover,
	#image-nav a.active {
		border-bottom: 1px solid;
	}

	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	img {
		width: 100%;
		/* margin-bottom: 0.8rem; */
	}

	#image-nav {
		width: 100%;
		display: flex;
		height: 50px;
	}

	/* make each link have --spacer on the right */
	#image-nav a {
		margin-right: 1em;
	}

	#back-container {
		width: 100%;
		display: flex;
		justify-content: flex-start;
		height: 50px;
	}

	/* set the shop container to 1 column when the screen is smaller than the mobile threshold */
	@media (max-width: 800px) {
		.grid-row {
			grid-template-columns: 1fr;
		}
	}
</style>
