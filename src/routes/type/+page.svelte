<svelte:head>
	<title>Type - Pedestrian Tactics</title>
</svelte:head>

<script lang="ts">
	import NavMenu from "$lib/NavMenu.svelte";

	import { onMount } from "svelte";

	let fontSize = 0;
	let fontWeight = 0;
	let fontLetterSpacing = 0;
	let isLightMode = false;
	let colorButtonText = "";
	let hideButtonText = "";
	let controlsHidden = true;

	function setText(text: string) {
		let editable = document.getElementById("editable-text");
		if (editable) {
			editable.innerText = text;
		}
	}

	function setDarkMode(dark = true) {
		isLightMode = !dark;
		if (isLightMode) {
			document.documentElement.style.setProperty("--color-bg", "white");
			document.documentElement.style.setProperty("--color-fg", "black");
			colorButtonText = "Light mode";
		} else {
			document.documentElement.style.setProperty("--color-bg", "black");
			document.documentElement.style.setProperty("--color-fg", "white");
			colorButtonText = "Dark mode";
		}
		isLightMode = !isLightMode;
	}

	function setControlVisibility(hidden = false) {
		controlsHidden = hidden;
		if (controlsHidden) {
			hideButtonText = "Edit";
			const hideable = document.getElementsByClassName("hideable");
			if (hideable) {
				for (let i = 0; i < hideable.length; i++) {
					(hideable[i] as HTMLElement).style.visibility = "hidden";
				}
			}
			// deselect everything
			window.getSelection()?.removeAllRanges();
			// disable text editing
			let editable = document.getElementById("editable-text");
			if (editable) {
				editable.contentEditable = "false";
			}
			// adjust button opacity
			let editButton = document.getElementById("edit-button");
			if (editButton) {
				editButton.style.opacity = "0.3";
			}
		} else {
			hideButtonText = "Done";
			const hideable = document.getElementsByClassName("hideable");
			if (hideable) {
				for (let i = 0; i < hideable.length; i++) {
					(hideable[i] as HTMLElement).style.visibility = "visible";
				}
			}
			let editable = document.getElementById("editable-text");
			if (editable) {
				editable.contentEditable = "true";
			}
			// adjust button opacity
			let editButton = document.getElementById("edit-button");
			if (editButton) {
				editButton.style.opacity = "1";
			}
		}
	}

	function resetFont() {
		fontSize = 128;
		fontWeight = 80;
		fontLetterSpacing = 0;
	}

	onMount(() => {
		setControlVisibility(true);
		resetFont(); // Run the function when the component mounts
		setDarkMode(true);
	});
</script>

<meta name="apple-mobile-web-app-capable" content="yes" />

<NavMenu currentPage="Type" breadcrumbs={[]} showFullMenu={false} />

<body>
	<div id="top-right">
		<button
			id="edit-button"
			on:click={() => setControlVisibility(!controlsHidden)}
			>{hideButtonText}</button
		>
	</div>
	<!-- <div id="top-left" class="hideable">
		<button on:click={() => setDarkMode(!isLightMode)}
			>{colorButtonText}</button
		>
	</div> -->
	<div id="bottom" class="hideable">
		<div>
			<p >Size {fontSize}pt</p>
			<input
				class="slider"
				type="range"
				min="32"
				max="1024"
				step="1"
				bind:value={fontSize}
			/>
		</div>
		<div>
			<p >Weight {fontWeight}</p>
			<input
				class="slider"
				type="range"
				min="80"
				max="120"
				step="1"
				bind:value={fontWeight}
			/>
		</div>
		<div>
			<p >Letter spacing {fontLetterSpacing}em</p>
			<input
				class="slider"
				type="range"
				min="-0.06"
				max="0.15"
				step="0.01"
				bind:value={fontLetterSpacing}
			/>
		</div>

		<!-- <button on:click={resetTestFont}>Reset</button> -->
	</div>
	<div id="container">
		<div
			style="font-size:{fontSize}px;font-weight:{fontWeight};letter-spacing:{fontLetterSpacing}em;"
			contenteditable="true"
			spellcheck="false"
			id="editable-text"
		>
			Edit me
		</div>
	</div>
</body>

<style>
	/* @font-face {
		font-family: "Hyperwalk VF";
		src:
			url("/fonts/HyperwalkVF.woff2") format("woff2"),
			url("/fonts/HyperwalkVF.woff") format("woff"),
			url("/fonts/HyperwalkVF.ttf") format("ttf");
	}
	@font-face {
		font-family: "Hyperwalk Mono VF";
		src:
			url("/fonts/HyperwalkMonoVF.woff2") format("woff2"),
			url("/fonts/HyperwalkMonoVF.woff") format("woff"),
			url("/fonts/HyperwalkMonoVF.ttf") format("ttf");
	} */

	:root {
		--color-fg: white;
		--color-bg: black;
		background-color: var(--color-bg);
		color: var(--color-fg);
	}

	body {
		font-family: "Hyperwalk VF";
		margin: 0;
		padding: 0;
	}

	#bottom p {
		height: auto;
		margin-bottom: 1rem;
	}


	button {
		font-family: "Hyperwalk Mono VF", monospace;
		font-weight: 80;
		font-size: 14pt;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		/* font-weight: 80; */
	}

	/* make the editable text div center the content horizontally and vertically */
	#container {
		display: grid;
		place-items: center;
		height: 100vh;
		/* width: 100vw; */
		margin: 0;
		padding: 0;
	}

	#top-right {
		position: fixed;
		top: 1rem;
		right: 1rem;
	}

	#bottom {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
		right: 1rem;
		padding-top: 1rem;

		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1rem;
	}

	#top-left {
		position: fixed;
		top: 1rem;
		left: 1rem;
	}

	#editable-text {
		/* remove the border from the text when being edited */
		border: none;
		/* remove the outline when being focused */
		outline: none;
		text-align: center;
		/* height: 100%; */
		margin: 0;
		padding: 0;
		word-break: break-all;
	}

	.slider {
		appearance: none;
		height: 1px; /* Specified height */
		/* remove corner rounding */
		border-radius: 0;
		width: 100%;
		/* outline: 1px solid var(--color-fg);  */
		outline: none;
		background-color: var(--color-fg);
		/* background-color: var(--color-bg);  */
		margin: 0;
		padding: 0;
		margin-bottom: 1rem;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none;
		appearance: none;
		width: 24px;
		height: 24px;
		background: var(--color-bg);
		outline: 1px solid var(--color-fg);
		border-radius: 100%;
		cursor: pointer;
		margin: 0;
		padding: 0;
		/* remove drop shadow */
		box-shadow: none;
	}

	.slider::-moz-range-thumb {
		width: 10px;
		height: 10px;
		background: var(--color-fg);
		cursor: pointer;
		margin: 0;
		padding: 0;
	}

	button {
		background: none;
		color: var(--color-fg);
		border: 1px solid var(--color-fg);
		/* border:none; */

		/* font-family: "Hyperwalk VF"; */
		/* font-size: 14pt; */
		/* letter-spacing: 0.05em; */
		/* text-transform: uppercase; */
		/* font-weight: 80; */

		padding-left: 0.4em;
		padding-right: 0.4em;
		padding-bottom: 0.2em;
		padding-top: 0.3em;

		margin: 0;
		outline: none;
	}

	@media (max-width: 640px) {
		#bottom {
			grid-template-columns: 1fr;
		}
	}
</style>
