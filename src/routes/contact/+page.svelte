<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
	<title>Contact - Pedestrian Tactics</title>
</svelte:head>

<NavMenu currentPage="Contact" breadcrumbs={[]} />

<div id="container">
	<div id="content">
		<p>If you're a human, you'll know what to do.</p>
		<img src="/images/contact.jpg" alt="contact email" />
		<div class="warning">
			<p>
				This page will not render correctly if you are browsing without
				images enabled or in a reader view.
			</p>
		</div>
	</div>
</div>

<style>
	#container {
		max-width: 640px;
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}

	.warning {
		max-width: 50%;
	}

	#content {
		margin: 2rem;
	}

	img {
		width: 100%;
		margin-bottom: 1rem;
	}

	/* add a breakpoint for 700px */
	@media (max-width: 400px) {
		.warning {
			max-width: 100%;
		}
	}
</style>
