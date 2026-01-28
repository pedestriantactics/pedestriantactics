<script>
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
	<title>Sessions - Pedestrian Tactics</title>
</svelte:head>

<NavMenu />

<div id="container">
	<div id="content">
		<h2><a id="back-button" class="unstyled-link mono" href="../">←</a></h2>
		<div id="main">
			<h2 class="">
				I offer one-on-one sessions for anyone who would like to improve
				their music production process. In the past these sessions have
				ranged from birds-eye discussions on mindset and overcoming
				production hurdles, to technical sound design tutorials and
				critiques. All skill levels and softwares are welcome
			</h2>
		</div>
		<div id="cta">
			<h2 class="">
				<a
					class="unstyled-link"
					href="https://calendly.com/pedestriantactics/"
					><span class="mono">→</span>Click to be redirected
					to my Calendly booking page</a
				>
			</h2>
		</div>
	</div>
</div>

<style>
	#container {
		position: fixed;
		top: calc(var(--nav-height) + var(--outer-margin));
		left: var(--outer-margin);
		right: var(--outer-margin);
		bottom: var(--outer-margin);
		align-content: center;
	}

	#content {
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		grid-template-rows: min-content min-content;
		column-gap: var(--grid-gap);
		row-gap: var(--vertical-gap);
		grid-template-areas:
			"back .    main main main main .    .   "
			".    .    seco seco seco seco .    .   ";
	}

	#back-button {
		grid-area: back;
	}

	#main {
		grid-area: main;
	}

	#cta {
		grid-area: seco;
	}

	img {
		grid-area: imag;
		width: 100%;
	}

	/* allow scrolling */
	@media (max-height: 600px) or (max-width: 580px) {
		#container {
			top: 0;
			left: 0;
			bottom: 0;
			right: 0;
			padding: var(--outer-margin);
			position: relative;
			margin-top: calc(var(--nav-height) + var(--vertical-gap));
			width: calc(100% - 2 * var(--outer-margin));
			height: auto;
		}
	}

	@media (max-width: 950px) {
		#content {
			grid-template-rows: min-content 1fr;
			grid-template-areas:
				"back back back back back back back back"
				"main main main main main main main main"
				"seco seco seco seco seco seco seco seco";
		}
	}
</style>
