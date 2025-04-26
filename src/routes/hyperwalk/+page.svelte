<script>
	import { onMount } from "svelte";
	// import Layout from "$lib/BaseLayout.svelte";

	let isLightMode = true;
	let buttonText = "";
	let fontSize = 0;
	let fontWeight = 0;
	let fontLetterSpacing = 0;
	let userContent = "";

	function toggleColors() {
		if (isLightMode) {
			document.documentElement.style.setProperty("--color-bg", "white");
			document.documentElement.style.setProperty("--color-fg", "black");
			buttonText = "Light";
		} else {
			document.documentElement.style.setProperty("--color-bg", "black");
			document.documentElement.style.setProperty("--color-fg", "white");
			buttonText = "Dark";
		}
		isLightMode = !isLightMode;
	}

	function resetTestFont() {
		fontSize = 80;
		fontWeight = 80;
		userContent =
			"abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789 (edit me)";
	}

	onMount(() => {
		resetTestFont(); // Run the function when the component mounts
		toggleColors(); // Run the function when the component mounts
	});
</script>

<svelte:head>
	<title>Hyperwalk - Pedestrian Tactics</title>
	<style>
		:root {
			--color-fg: black;
			--color-bg: white;
		}
	</style>
</svelte:head>

<div id="top-right">
	<button on:click={toggleColors}>{buttonText}</button>
</div>
<div id="top-left">
	<p>PT-F5</p>
</div>
<div id="bottom-right">
	<p>©2024</p>
</div>
<div id="container">
	<!-- <p>PT-F5</p> -->
	<p class="h1 animated">Hyperwalk</p>
	<div class="grid4">
		<p>Manifesto and type specimen</p>
		<p>Pedestrian Tactics<br />©2024</p>
	</div>
	<div class="spacer"></div>
	<p >80 / 24pt</p>
	<p class="b2">
		Hyperwalk is a sans-serif typeface originally designed in two weights
		and later adapted into a variable-weight font. The design began in 2018
		by Dan Taylor and has been constantly refined since.
	</p>
	<div class="spacer"></div>
	<div class="grid2">
		<div>
			<p >PT-F5 / 120 / 48pt</p>
			<p class="h2" style="font-weight: 120;">Hyperwalk<br />110</p>
		</div>
		<div>
			<p >PT-F5 / 80 / 48pt</p>
			<p class="h2">Hyperwalk<br />80</p>
		</div>
	</div>
	<div class="grid2">
		<div>
			<p >Body - 80 / 24pt</p>
			<div>
				<p>
					Hyperwalk was initially designed as a typographical logo for
					the music and multimedia project Pedestrian Tactics.
				</p>
				<p>
					The limited character set was later refined to serve as
					headline text for the project's website and collateral.
				</p>
			</div>
		</div>
	</div>
	<div class="spacer"></div>
	<p >100 / 48pt</p>
	<div class="inverse-container">
		<p class="h2" style="font-weight:100;">
			<span>PT-T62</span> Ill Gates - <br />Animal (Pedestrian Tactics
			Remix)
		</p>
	</div>
	<div class="spacer"></div>
	<div class="grid2">
		<div></div>
		<div>
			<p>
				In 2023 the typeface was expanded further with a thorough
				kerning table, additional punctuation, and diacritics for other
				latin-based languages.
			</p>
		</div>
	</div>
	<div class="spacer"></div>
	<div class="grid2">
		<div>
			<p >120 / 128pt</p>
			<p class="h1" style="font-weight:120;">hypé</p>
			<p >120 / 36pt</p>
			<p class="b2" style="font-weight:120;font-size:36pt;">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo
				plebiscito decreta a senatu est consuli quaestio Cn. Possumusne
				ergo in vita summum bonum dicere, cum id ne in cena quidem posse
				videamur? Quod idem cum vestri faciant, non satis magnam
				tribuunt inventoribus gratiam.
			</p>
		</div>
		<div>
			<p >80 / 128pt</p>
			<p class="h1" style="font-weight:80;">hypé</p>
			<p >110 / 36pt</p>
			<p class="b2" style="font-weight:80;font-size:36pt;">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo
				plebiscito decreta a senatu est consuli quaestio Cn. Possumusne
				ergo in vita summum bonum dicere, cum id ne in cena quidem posse
				videamur? Quod idem cum vestri faciant, non satis magnam
				tribuunt inventoribus gratiam.
			</p>
		</div>
	</div>
	<div class="spacer"></div>
	<div>
		<div class="grid4">
			<div>
				<p >Size {fontSize}pt</p>
				<input
					class="slider"
					type="range"
					min="10"
					max="128"
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
		<p
			contenteditable="true"
			spellcheck="false"
			class="b2"
			style="font-weight:{fontWeight};font-size:{fontSize}pt;letter-spacing:{fontLetterSpacing}em;word-break:break-all;"
		>
			{userContent}
		</p>
	</div>
	<div class="spacer"></div>
	<p >120 / 128pt / -0.05em</p>
	<div class="inverse-container">
		<p class="h1" style="font-weight:120;font-size:128pt;">Fuel Gauge →</p>
	</div>
	<div class="spacer"></div>
	<p >120 / 64pt</p>
	<p class="h2" style="font-weight:120;font-size:64pt;">WARNING:</p>
	<p >100 / 24pt</p>
	<p
		class="b2"
		style="font-weight:100;font-size:24pt;text-transform:uppercase;"
	>
		This product contains the chemical Methylethylkeocreaceratine which is
		known by the state of California to cause uncontrollable cravings for
		ramen. Please exercise caution when using this product.
	</p>
	<div class="spacer"></div>
	<p >90 / 16pt</p>
	<div class="grid2">
		<div>
			<p class="b2" style="font-size:16pt;">
				If you're interested in using Hyperwalk or a customized version
				of Hyperwalk in your own applications please contact me for more
				information.
			</p>
		</div>
		<div>
			<p class="b2" style="font-size:16pt;">
				<a href="http://instagram.com/pedestriantactics">Contact me</a> →
			</p>
		</div>
	</div>
</div>

<style>
	@keyframes font-weight-animate {
		from {
			font-weight: 80;
		}
		50% {
			font-weight: 120;
		}
		to {
			font-weight: 80;
		}
	}
	:root {
		font-size: 14pt;
		font-weight: 80;
		--color-fg: #000;
		--color-bg: #fff;
		--color-hyperwalk-accent: #e1edf2;
		background-color: var(--color-bg);
		color: var(--color-fg);
	}

	#container {
		margin: 2rem;
	}

	.caption {
		display: inline;
		margin-right: 2em;
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

	span {
		background: var(--color-fg);
		color: var(--color-bg);
		padding-left: 0.2em;
		padding-right: 0.2em;
		padding-top: 0.2em;
		padding-bottom: 0em;
	}

	.inverse-container {
		background-color: var(--color-fg);
		color: var(--color-bg);
		padding: var(--outer-margin);
		/* margin-left: calc(var(--outer-margin)*-1);
		margin-right: calc(var(--outer-margin)*-1); */
		border: none;
	}

	.inverse-container span {
		background: var(--color-bg);
		color: var(--color-fg);
	}

	#top-right {
		position: fixed;
		top: 1rem;
		right: 1rem;
	}
	#top-left {
		position: fixed;
		top: 1rem;
		left: 1rem;
	}
	#bottom-right {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
	}
	#bottom-left {
		position: fixed;
		bottom: 1rem;
		left: 1rem;
	}
	.spacer {
		height: 3rem;
	}
	button {
		background: none;
		color: var(--color-fg);
		border: 1px solid var(--color-fg);
		/* border:none; */

		font-family: "Hyperwalk VF";
		font-size: 14pt;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-weight: 80;

		padding-left: 0.3em;
		padding-right: 0.3em;
		padding-bottom: 0em;
		padding-top: 0.1em;

		margin: 0;
		outline: none;
	}
	.caption {
		font-size: 8pt;
		letter-spacing: 0.05em;
		text-transform: uppercase;
		font-weight: 100;

		width: 100%;
		text-align: left;

		margin-bottom: 0.5em;
	}
	.b2 {
		font-size: 24pt;
	}
	.h2 {
		font-size: 48pt;
	}
	.h1 {
		font-size: 128pt;
		letter-spacing: -0.05em;
		font-weight: 100;
	}
	.animated {
		animation: font-weight-animate 2s infinite ease-in-out;
	}

	.grid2 {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 1rem;
	}
	.grid4 {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr;
		column-gap: 1rem;
	}
	[contenteditable="true"]::selection {
		background: var(--color-hyperwalk-accent);
		color: var(--color-fg); /* Custom text color for selected text */
		/* outline-style: none; */
		border: none;
	}
	[contenteditable="true"]:focus {
		outline: 1px dashed var(--color-fg);
	}

	@media (max-width: 820px) {
		.h1 {
			font-size: 80pt;
		}

		.grid2 {
			grid-template-columns: 1fr;
		}
		.grid4 {
			grid-template-columns: 1fr 1fr;
		}
	}

	@media (max-width: 480px) {
		.h1 {
			font-size: 48pt;
		}
	}
</style>
