<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
	<title>Links - Pedestrian Tactics</title>
</svelte:head>

<NavMenu currentPage="Links" breadcrumbs={[]} />

<div id="container">
	<div class="content">
		<div class="column">
			<!-- <h1>↘</h1> -->
			<h1>→</h1>
			<p class="caption">
				All links open in a new tab for your convenience
			</p>
		</div>
		<div id="links" class="column">
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="https://open.spotify.com/artist/6TFOalvhHRXh8JmQTVSoyY?si=LAiGHSjrQ_ygKM9K_AV3wA"
					>Spotify</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="https://music.apple.com/us/artist/pedestrian-tactics/1248460066"
					>Apple Music</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="http://soundcloud.com/pedestriantactics">Soundcloud</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="http://twitter.com/pedestriantac">X (Twitter)</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="http://instagram.com/pedestriantactics">Instagram</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="http://youtube.com/pedestriantactics">YouTube</a
				>
			</h2>
			<h2>
				<a
					class="unstyled-link"
					target="blank"
					href="https://www.patreon.com/pedestriantactics">Patreon</a
				>
			</h2>
		</div>
	</div>
</div>

<style>
	#container {
		width: 100vw;
		height: 100vh;
		display: grid;
		align-items: center;
		justify-items: center;
		margin-left: auto;
		margin-right: auto;
	}

	#links h2 {
		margin-bottom: 0;
	}

	.content {
		padding: 2rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		/* add a gap of 32px */
		gap: 3rem;
	}

	p {
		max-width: 14em;
	}

	h1 {
		font-size: 90pt;
		font-weight: 60;
		margin-top: -0.1em;
		margin-left: -.05em;
		margin-right: 0.1em;
		margin-bottom: 0;
	}

	a {
		/* font-size: 2rem; */
		display: block;
	}

	/* add a breakpoint for 700px */
	@media (max-width: 500px) {
		.content {
			flex-direction: column;
		}
	}
</style>
