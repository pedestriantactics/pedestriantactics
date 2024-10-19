<div id="container">
	<div id="title-container">
		<div class="grid-container">
			<p id="description" class="caption">
				Electronic music and design works assembled by Dan Taylor in
				various coffee shops and workspaces
			</p>
			<h1>Pedestrian &nbsp;</h1>
			<p class="mono">Index /</p>
		</div>
		<div class="grid-container">
			<p class="caption">
				©2024 <br /> <br /><br />
			</p>
			<h1>Tactics®</h1>
			<div id="links">
				<a href="releases" class="mono">Releases</a>
				<a href="newsletter" class="mono">Newsletter</a>
				<a href="links" class="mono">Links</a>
				<a href="contact" class="mono">Contact</a>
			</div>
		</div>
	</div>
</div>

<svelte:head>
	<style>
		:root {
			--color-fg: white;
			--color-bg: black;
		}
	</style>
</svelte:head>

<style>
	.grid-container {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}

	#description {
		max-width: 22em;
	}

	#links {
		display: flex;
		flex-direction: column;
		gap: 12pt;
	}

	a:hover::after {
		content: "←";
		/* offset the arrow so it's to the left of the link */
	}

	#title-container {
		display: inline-flex;
		align-items: top;
	}

	#container {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
