<script lang="ts">
	export let title: string;
	export let postPath: string;
	export let category: string;
	export let formattedDate: Date;
	export let code: string;
	export let image: string;
	export let audioType: string;
	export let recordLabel: string;
	export let imageContrast: boolean;
	if (code == null) code = "";

	// create a function that creates a date string from a Date
	// this will use the get methods of the Date object to create a date that is formatted yyyy-mm-dd
	function formatDate(date: Date): string {
		return date.toString().split("T")[0];
	}
</script>

<a class="unstyled-link" href={"/" + postPath}>
	<div id="grid-element">
		<img src={"/images/" + image} class:image-contrast={imageContrast} alt={title} />
		<div id="description">
			<p>
				{#if code != ""}{code} /
				{/if}
				{title}
				{#if audioType != ""}
					/ {audioType}{/if}
			</p>
		</div>
	</div>
</a>

<style>
	#description {
		height: 4rem;
	}
	img {
		width: 100%;
		margin-bottom: var(--grid-gap);
	}
</style>
