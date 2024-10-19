<script lang="ts">
	import { page } from "$app/stores";

	export let currentPage: string;
	export let breadcrumbs: { name: string; destination: string }[];

	let links: { name: string; destination: string }[] = [
		{ name: "Releases", destination: "/releases" },
		{ name: "Newsletter", destination: "/newsletter" },
		{ name: "Links", destination: "/links" },
		{ name: "Contact", destination: "/contact" },
	];

	$: activeLink = links.find((link) => link.name === currentPage);
</script>

<div id="nav-top">
	<p class="caption mono">
		<a href="../">Pedestrian Tactics</a> / {#each breadcrumbs as breadcrumb}<a
				href={breadcrumb.destination}>{breadcrumb.name}</a
			> /
		{/each}{currentPage}
		<br />
		<br />
		{#each links as link}
			{#if link.name === currentPage}
				{link.name}←
			{:else}
				<a href={link.destination}>{link.name}</a>
			{/if}
			<br />
		{/each}
	</p>
</div>

<style>
	#nav-top {
		position: fixed;
		top: 1rem;
		left: 1rem;
		padding: 2px;
	}

	.menu-link {
		display: inline-block;
	}

	.menu-link:hover,
	.menu-link:focus {
		text-decoration: none;
	}

	.active-link {
		text-decoration: none;
		color: inherit;
	}

	.active-link:after {
		content: "←";
	}
</style>
