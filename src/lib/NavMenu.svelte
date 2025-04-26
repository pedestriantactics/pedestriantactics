<script lang="ts">
	import { page } from "$app/stores";
	export let currentPage: string;
	export let breadcrumbs: { name: string; destination: string }[];
	export let showFullMenu = true;

	let links: { name: string; destination: string }[] = [
		{ name: "Releases", destination: "/releases" },
		{ name: "Newsletter", destination: "/newsletter" },
		{ name: "Shows", destination: "/shows" },
		{ name: "Links", destination: "/links" },
		{ name: "Contact", destination: "/contact" },
	];

	$: activeLink = links.find((link) => link.name === currentPage);
</script>

<div id="nav-top" class="unstyled-link no-animate">
	<p>
		<a href="../">Pedestrian Tactics</a> / {#each breadcrumbs as breadcrumb}<a
				href={breadcrumb.destination}>{breadcrumb.name}</a
			> /
		{/each}{currentPage}
		{#if showFullMenu}
		<br>
		<br>
			{#each links as link}
				{#if link.name === currentPage} 
					{link.name}←
				{:else}
					<a href={link.destination}
						>{link.name}</a
					>
				{/if}
				<br>
			{/each}
		{/if}
	</p>
</div>

<style>
	#nav-top {
		position: fixed;
		top: var(--outer-margin);
		left: var(--outer-margin);
		/* padding: 2px; */
		z-index: 100;
		mix-blend-mode: difference;
	}

	#nav-top, #nav-top a {
		color: white;
	}
</style>
