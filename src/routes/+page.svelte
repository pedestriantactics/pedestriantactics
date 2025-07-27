<svelte:head>
	<title>Pedestrian Tactics</title>
</svelte:head>

<div id="container">
	<div id="content">
		<div id="title-container">
			<div class="title-row">
				<p class="caption">
					Designed and assembled in various coffee shops and workspaces
				</p>
				<p class="caption">©2025</p>
			</div>
			<div id="title" class="title-row">
				<div>&#xE002;</div>
				<div>&#xE003;</div>
				<div>&#xE004;</div>
				<div>&#xE005;</div>
			</div>
			<div id="links" class="title-row">
				<p>Pedestrian Tactics /</p>
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
	#links a {
		display: block;
	}

	#title-container {
		display: flex;
		/* width: 100%; */
		flex-direction: column;
		align-items: center;
	}

	.title-row {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
		margin-bottom: var(--vertical-gap);
	}

	#title {
		grid-template-columns: 1fr 1fr 1fr 1fr;
		font-family: "Hyperwalk VF";
		font-size: 128pt;
		line-height: 0.6em;
	}

	a:hover::after {
		content: "←";
	}

	@media (max-width: 600px) {
		#title {
			font-size: 96pt;
		}
	}

	@media (max-width: 490px) {
		#title {
			grid-template-columns: 1fr 1fr;
			font-size: 128pt;
		}
	}
</style>
