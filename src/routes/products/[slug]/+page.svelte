<script lang="ts">
	export let data: {
		// metadata: { [key: string]: string };
		title: string;
		code: string;
		date: string;
		images: string[];
		description: string;
		content: any;
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
<div>
	<div id="back-container">
		<h3>
			<!-- create a back button as an a tag, use the < character -->
			<a href="/products">&lt;</a>
		</h3>
	</div>

	<div id="shop-container">
		<div>
			<img src="/images/{data.images[currentImage]}" alt={data.title} />
			<!-- add an if statement to generate the image nav if there is more than one image -->
			{#if data.images.length > 1}
				<div id="image-nav">
					{#each data.images as image, i}
						<h3>
							<a style="cursor: pointer;"
								class:active={i === currentImage}
								on:click={() => (currentImage = i)}
							>
								IMG{i + 1}
							</a>
						</h3>
					{/each}
					<!-- <a on:click={showPreviousImage}>&lt;</a>
					<a on:click={showNextImage}>&rt;</a> -->
				</div>
			{/if}
		</div>
		<div>
			{#if data.code}
				<h1>
					{data.code}
				</h1>
				<p>{data.title}</p>
			{:else}
				<h1>
					{data.title}
				</h1>
			{/if}
			<svelte:component this={data.content} />
		</div>
	</div>
</div>
<style>
	#shop-container {
		display: grid;
		grid-gap: var(--outer-margin);
		grid-template-columns: 1fr 1fr;
	}

	img {
		width: 100%;
		margin-bottom: .8rem;
	}

	#image-nav {
		width: 100%;
		display: flex;
		justify-content: center;
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
		#shop-container {
			grid-template-columns: 1fr;
		}
	}
</style>
