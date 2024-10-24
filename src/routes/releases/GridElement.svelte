<script lang="ts">
	export let title: string;
	export let postPath: string;
	export let code: string;
	export let image: string;
	export let category: string;
	export let audioType: string;
	export let recordLabel: string;
	export let formattedDate: Date;
	if (code == null) code = "";

	// declare const window: Window & { location: Location };
	// const currentRoute = window.location.pathname.split('/').slice(0, -1).join('/');
	const currentRoute = "/releases";

	// create a function that creates a date string from a Date
	// this will use the get methods of the Date object to create a date that is formatted yyyy-mm-dd
	function formatDate(date: Date): string {
		return date.toString().split("T")[0];
	}
</script>

<a class="unstyled" href="{currentRoute}/{postPath}">
	<div id="grid-element" class="fast-animate">
		<img src="/images/{image}" class="no-animate" alt={title} />
		<p class="caption mono">
			{formatDate(formattedDate)}
		</p>
		<div id="description" class="no-animate">
			<p class="image-caption caption mono fast-animate">
				{#if code != ""}{code} /
				{/if}
				{title} /
				{#if audioType != ""}{audioType} /
				{/if}
				{#if recordLabel != ""}{recordLabel} /
				{/if}
				{category}
			</p>
		</div>
	</div>
</a>

<style>
	#grid-element {
		/* margin-bottom: 2rem; */
	}
	#description {
		height: 3rem;
	}
	img {
		width: 100%;
		margin-bottom: 0.2rem;
	}
	.image-caption {
		margin-top: 1em;
		margin-left: 4em;
	}
</style>
