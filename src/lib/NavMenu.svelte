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

<div id="nav-top" class="no-animate">
	<p class="caption mono">
		<a class="unstyled" href="../">Pedestrian Tactics</a> / {#each breadcrumbs as breadcrumb}<a
				class="unstyled"
				href={breadcrumb.destination}>{breadcrumb.name}</a
			> /
		{/each}{currentPage}
		{#if showFullMenu}
			<br />
			<br />
			{#each links as link}
				{#if link.name === currentPage}
					{link.name}←
				{:else}
					<a class="linky unstyled" href={link.destination}
						>{link.name}</a
					>
				{/if}
				<br />
			{/each}
		{/if}
	</p>
</div>

<style>
	#nav-top {
		position: fixed;
		top: 1rem;
		left: 1rem;
		padding: 2px;
		z-index: 100;
	}

	.linky:hover,
	.linky:focus {
		text-decoration: none;
	}

	.linky:hover::after {
		content: "←";
	}
</style>
