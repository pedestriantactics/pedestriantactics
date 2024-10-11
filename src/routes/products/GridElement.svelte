<script lang="ts">
	// export let image: string;
	export let title: string;
	export let postPath: string;
	export let code: string;
	export let image: string;
	if (code == null) code = '';

	// declare const window: Window & { location: Location };
	// const currentRoute = window.location.pathname.split('/').slice(0, -1).join('/');
	const currentRoute = '/products';
</script>

<h3>
<a href="{currentRoute}/{postPath}">
	<div id="grid-element">
		<img src="/images/{image}" alt={title} />
		{#if code != ''}
			<p>{code}</p>
		{:else}
			<p>{title}</p>
		{/if}
	</div>
</a>
</h3>

<style>
	img {
		width: 100%;
		margin-bottom: 0.2rem;
	}
	.image-caption {
		/* text-align: right; */
	}
</style>
