<svelte:head>
	<title>Pedestrian Tactics</title>
	<style>
		:root {
			--color-fg: white;
			--color-bg: black;
		}
	</style>
</svelte:head>

<div id="container">
	<div id="content-desktop">
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
				<a href="releases" class="mono unstyled">Releases</a>
				<a href="shows" class="mono unstyled">Shows</a>
				<a href="newsletter" class="mono unstyled">Newsletter</a>
				<a href="links" class="mono unstyled">Links</a>
				<a href="contact" class="mono unstyled">Contact</a>
			</div>
		</div>
	</div>

	<div id="content-mobile">
		<div class="grid-container">
			<p id="description" class="caption">
				Electronic music and design works assembled by Dan Taylor in
				various coffee shops and workspaces
				<br /> <br />
				©2024
			</p>
			<h1>Pedestrian<br />Tactics®</h1>
		</div>
		<div class="grid-container">
			<p class="mono">Index /</p>
			<div id="links">
				<a href="releases" class="mono unstyled">Releases</a>
				<a href="shows" class="mono unstyled">Shows</a>
				<a href="newsletter" class="mono unstyled">Newsletter</a>
				<a href="links" class="mono unstyled">Links</a>
				<a href="contact" class="mono unstyled">Contact</a>
			</div>
		</div>
	</div>
</div>

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

	#content-desktop {
		display: inline-flex;
		align-items: top;
	}

	#content-mobile {
		display: none;
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

	@media (max-width: 600px) {
		#content-desktop {
			display: none;
		}

		#content-mobile {
			display: flex;
			flex-direction: column;
		}
	}

	@media (max-height: 500px) {
		#links {
			gap: 0pt;
		}
	}
</style>
