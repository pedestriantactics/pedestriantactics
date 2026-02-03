<script lang="ts">
	import { page } from "$app/stores";
	import Byline from "$lib/Byline.svelte";

	// adds a return to home button for sub pages
	export let backVisible: boolean = true;
</script>

<div id="nav-top" class="unstyled-links">
	<h2 id="title">
		<a href="../">Pedestrian Tactics</a>
		<!-- {#if backVisible}
			<a class="mono" href="../">←</a>
		{/if} -->
	</h2>
	<p id="links" class="">
		<a href="https://pedestriantactics.bandcamp.com">Bandcamp</a>
		<a href="https://instagram.com/pedestriantactics">Instagram</a>
		<a href="https://bsky.app/profile/pedestriantactics.bsky.social"
			>Bluesky</a
		>
		<a href="https://calendly.com/pedestriantactics/">Sessions</a>
	</p>
	<div id="byline">
		<Byline />
	</div>
</div>

<style>
	#nav-top {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		padding: 1rem;
		z-index: 100;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: var(--grid-gap);
		grid-template-areas: "titl titl titl titl lnks lnks blin blin";
		background-color: var(--color-bg);
	}

	#links > * {
		display: block;
	}

	#title {
		grid-area: titl;
	}

	#links {
		grid-area: lnks;
	}

	#byline {
		grid-area: blin;
	}

	#nav-top,
	#nav-top a {
		/* color: white; */
	}

	@media (max-width: 580px) {
		#nav-top {
			grid-template-columns: repeat(3, 1fr);
			grid-template-areas: "titl titl lnks";
		}

		#byline {
			display: none;
		}
	}

	/* @media (max-width: 450px) {
		#title {
			grid-column: span 4;
		}

		#links {
			grid-column: span 4;
		}
	} */
</style>
