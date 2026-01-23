<script lang="ts">
	import { page } from "$app/stores";
	export let currentPage: string;
	export let breadcrumbs: { name: string; destination: string }[];
	export let showFullMenu = true;

	export let byline =
		"Designed and assembled in various coffee shops and workspaces";

	let links: { name: string; destination: string }[] = [
		{ name: "Releases", destination: "/releases" },
		{ name: "Sessions", destination: "/sessions" },
		// { name: "Shows", destination: "/shows" },
		{
			name: "Bandcamp",
			destination: "https://pedestriantactics.bandcamp.com",
		},
		{
			name: "Instagram",
			destination: "https://instagram.com/pedestriantactics",
		},
		{ name: "Email", destination: "/email" },
	];

	$: activeLink = links.find((link) => link.name === currentPage);
</script>

<div id="nav-top" class="unstyled-links no-animate">
	<h2 id="title">
		<a href="../">Pedestrian Tactics</a>
	</h2>
	<p id="links">
		{#if showFullMenu}
			{#each links as link}
				{#if link.name === currentPage}
					{link.name}←
				{:else}
					<a href={link.destination}>{link.name}</a>
				{/if}
				<br />
			{/each}
		{/if}
	</p>
	<p id="byline">{byline}</p>
</div>

<style>
	#nav-top {
		position: fixed;
		top: var(--outer-margin);
		left: var(--outer-margin);
		right: var(--outer-margin);
		z-index: 100;
		mix-blend-mode: difference;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
		gap: var(--grid-gap);
	}

	#title {
		grid-column: span 4;
	}

	#links,
	#byline {
		grid-column: span 2;
	}

	#nav-top,
	#nav-top a {
		color: white;
	}

	@media (max-width: 580px) {
		#nav-top {
			grid-template-columns: repeat(3, 1fr);
		}
		#title {
			grid-column: span 2;
		}

		#links {
			grid-column: span 1;
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
