<script>
	// import the textlayout from the lib folder
	import NavMenu from "$lib/NavMenu.svelte";
	import LineItem from "./LineItem.svelte";

	// create a list of shows where each show contains a date, name, and location

	let upcomingShow = { date: "", name: "", location: "" };

	let pastShows = [
		{
			date: "2024-10",
			name: "Selector Records with Hudson Lee",
			location: "Seattle, WA",
			fullDate:
				"2024-10 / Selector Records with Hudson Lee / Seattle, WA",
		},
		{
			date: "2023-11",
			name: "Techno Four, Impact! Productions, Kremwerk",
			location: "Seattle, WA",
			fullDate:
				"2023-11 / Techno Four, Impact! Productions, Kremwerk / Seattle, WA",
		},
		{
			date: "2019-09",
			name: "Substation",
			location: "Seattle, WA",
			fullDate: "2019-09 / Substation / Seattle, WA",
		},
		{
			date: "2018-09",
			name: "Club Contour",
			location: "Seattle, WA",
			fullDate: "2018-09 / Club Contour / Seattle, WA",
		},
		{
			date: "2018-07",
			name: "Priceless Festival with IllGates",
			location: "Balden, CA",
			fullDate: "2018-07 / Priceless Festival with IllGates / Balden, CA",
		},
		{
			date: "2016-07",
			name: "Substation",
			location: "Seattle, WA",
			fullDate: "2016-07 / Substation / Seattle, WA",
		},
		{
			date: "2015-10",
			name: "Ghost Glitch",
			location: "Ohio",
			fullDate: "2015-10 / Ghost Glitch / Ohio",
		},
		{
			date: "2015-08",
			name: "The Pirate Party",
			location: "Montana",
			fullDate: "2015-08 / The Pirate Party / Montana",
		},
		{
			date: "2014-10",
			name: "Motiv Nightclub",
			location: "Santa Cruz, CA",
			fullDate: "2014-10 / Motiv Nightclub / Santa Cruz, CA",
		},
		{
			date: "2014-09",
			name: "Elevation",
			location: "Ohio",
			fullDate: "2014-09 / Elevation / Ohio",
		},
		{
			date: "2014-07",
			name: "Foundation Nightclub with Eptic",
			location: "Seattle, WA",
			fullDate: "2014-07 / Foundation Nightclub with Eptic / Seattle, WA",
		},
		{
			date: "2014-03",
			name: "Filth Fest with 50 Carrot and Soloman",
			location: "Bellingham, WA",
			fullDate:
				"2014-03 / Filth Fest with 50 Carrot and Soloman / Bellingham, WA",
		},
		{
			date: "2014-03",
			name: "Embrace with Mr. Rogers and Digital Rust",
			location: "Bellingham, WA",
			fullDate:
				"2014-03 / Embrace with Mr. Rogers and Digital Rust / Bellingham, WA",
		},
		{
			date: "2014-01",
			name: "Rumors Nightclub",
			location: "Bellingham, WA",
			fullDate: "2014-01 / Rumors Nightclub / Bellingham, WA",
		},
	];
</script>

<NavMenu currentPage="Shows" breadcrumbs={[]} />

<div id="container">
	<div id="content">
		<p>Upcoming</p>
		<br />
		{#if upcomingShow.date != ""}
			<LineItem
				date={upcomingShow.date}
				name={upcomingShow.name}
				location={upcomingShow.location}
			/>
		{:else}
			<p class="large-paragraph animate">
				There are no upcoming shows. <br />
			</p>
		{/if}
		<br />
		<p>Past</p>
		<br />
		{#each pastShows as show}
			<LineItem
				date={show.date}
				name={show.name}
				location={show.location}
			/>
		{/each}
	</div>
</div>

<svelte:head>
	<title>Shows - Pedestrian Tactics</title>
</svelte:head>

<style>
	#content {
		/* this helps with animation */
		min-height: 280pt;
		/* background-color: blue; */
		/* height: auto; */
	}

	@media (max-height: 400px), (max-width: 800px) and (max-height: 2000px) {
		#container {
			align-items: flex-start;
			margin-top: var(--top-margin);
		}
	}
</style>
