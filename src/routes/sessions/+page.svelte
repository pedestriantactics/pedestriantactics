<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
	// create a list of shows where each show contains a date, name, and location
</script>

<NavMenu currentPage="Sessions" breadcrumbs={[]} />

<div id="container">
	<div id="content">
		<h2 class="">
			I offer one-on-one sessions for anyone who would like to improve
			their music production process. In the past these sessions have
			ranged from birds-eye discussions on mindset and overcoming production hurdles, 
			to technical sound design tutorials and critiques. All skill levels and
			softwares are welcome
		</h2>
		<h2 class="">Click the arrow to be redirected to my Calendly booking page</h2>
		<h2 class="animate"><a class="unstyled-link" href="https://calendly.com/pedestriantactics/1-hour">→</a></h2>
	</div>
</div>

<svelte:head>
	<title>Sessions - Pedestrian Tactics</title>
</svelte:head>

<style>
	#content {
		/* this helps with animation */
		min-height: 350pt;
		/* background-color: blue; */
		/* height: auto; */
	}

	
</style>

<!-- @media (max-height: 400px), (max-width: 800px) and (max-height: 2000px) {
		#container {
			align-items: flex-start;
			margin-top: var(--top-margin);
		}
	} -->
