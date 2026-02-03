<script>
	import NavMenu from "$lib/NavMenu.svelte";
</script>

<svelte:head>
	<title>Inquiries - Pedestrian Tactics</title>
</svelte:head>

<NavMenu />

<div id="container">
	<div id="content">
		<h2><a id="back-button" class="unstyled-link mono" href="../">←</a></h2>
		<img src="/images/contact.jpg" alt="contact email" />
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
		grid-template-rows: 1fr;
		column-gap: var(--grid-gap);
		row-gap: var(--vertical-gap);
		grid-template-areas: "back .    imag imag imag imag .      ";
	}

	#back-button {
		grid-area: back;
	}

	img {
		grid-area: imag;
		width: 100%;
	}

	@media (max-width: 950px) {
		#content {
			grid-template-rows: min-content 1fr;
			grid-template-areas:
				"back back back back back back back back"
				"imag imag imag imag imag imag imag imag";
		}
	}
</style>
