<script>
	export var date = "";
	export var name = "";
	export var location = "";
	export var link = "";
</script>

<div id="line">
	<p id="date" class="animate">{date}</p>
	<p id="location" class="animate">{location}</p>
	<p class="">{#if link != ""}<a href={link}>{name}</a>{:else}{name}{/if}</p>
</div>

<style>
	#line {
		width: 100%;
		display: flex;
		flex-direction: row;
		gap: 1rem;
	}

	#date {
		width: 6em;
	}
	#location {
		width: 12em;
	}

	/* create a breakpoint for 700 width */
	@media (max-width: 800px) {
		#line {
			flex-direction: column;
			gap: 0;
			margin-top: 1em;
		}
		#date {
			width: 100%;
		}
		#location {
			width: 100%;
		}
	}
</style>
