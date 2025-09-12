<svelte:head>
	<title>Pedestrian Tactics</title>
</svelte:head>

<div id="bg-image">
	</div>

	<div id="footer">
		<p><a class="arrow-link" href="releases/pt-t68">PT-T68 Out now!</a></p>
	</div>

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
	#bg-image {
		background-image: url('/images/home-bg.jpg');
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}

	#footer {
		position: absolute;
		bottom: var(--outer-margin);
		right: var(--outer-margin);
		display: flex;
		justify-content: space-between;
	}

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
/*
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
	*/

	@media (max-width: 490px) {
		#title {
			font-size: 80pt;
		}
	}
</style>
