<svelte:head>
	<title>Pedestrian Tactics</title>
</svelte:head>

<div id="container">
	<div id="content">
		<div id="content-desktop">
			<div id="top" class="transforming-row">
				<p class="pedestrian caption">
					Electronic music and design works assembled by Dan Taylor in
					various coffee shops and workspaces
				</p>
				<p class="caption">©2025</p>
			</div>
			<div id="title" class="transforming-row">
				<h1 class="pedestrian">Pedestrian</h1>
				<h1>Tactics®</h1>
			</div>
			<div id="links" class="transforming-row">
				<p class="pedestrian">Index /</p>
				<div id="links">
					<a href="releases" class="unstyled-link">Releases</a>
					<a href="shows" class="unstyled-link">Shows</a>
					<a href="newsletter" class="unstyled-link">Newsletter</a>
					<a href="links" class="unstyled-link">Links</a>
					<a href="contact" class="unstyled-link">Contact</a>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		margin-bottom: 0;
		line-height: 1.1em;
	}

	#links {
		/* font-size: 14pt; */
		/* line-height: 1em; */
	}

	#links a {
		display: block;
	}

	#top {
		height: 3rem;
	}

	#container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	#content {
		padding: var(--outer-margin);
	}

	.transforming-row {
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		gap: 3rem;
		margin-bottom: var(--vertical-gap);
	}

	.pedestrian {
		width: 24.5rem;
	}

	#description {
		max-width: 22em;
		height: 3rem;
	}

	a:hover::after {
		content: "←";
	}

	@media (max-width: 700px) {
		#top {
			height: auto;
		}

		#title {
			gap: 0;
		}

		.transforming-row {
			gap: 1rem;
			flex-direction: column;
		}
	}

	@media (max-width: 400px) {
		.pedestrian {
			width: auto;
		}
		h1 {
			font-size: 32pt;
		}
	}
</style>
