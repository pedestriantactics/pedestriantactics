<script>
	import Layout from "$lib/BaseLayout.svelte";
</script>


<Layout>
<body>
	<div id="video-container">
		<video autoplay loop muted playsinline>
			<source
				src="/images/cybertruck-simulator/bg-video.mp4"
				type="video/mp4"
			/>
			Your browser does not support the video tag.
		</video>
	</div>
	<div id="container">
		<div class="section">
			<img
				id="main-img"
				src="/images/cybertruck-simulator/title.png"
				alt="Cybertruck Simulator 2024"
			/>
			<!-- </div>
		<div class="section"> -->
			<!-- <h1>Cybertruck Simulator 2024</h1> -->
			<p>
				Rack up as many lawsuits as you can. Also available on <a href="https://pedestriantactics.itch.io/cybertruck-simulator">itch.io</a>.
			</p>
		</div>
		<div class="section">
		<h4>
				<a
					class="highlighted"
					href="https://youtu.be/502fiyjHqGM?si=QFAVOl6hI7hWdpBw"
					>Watch the trailer</a
				>
			</h4>
			<h4>
				<a
					class="highlighted"
					href="https://github.com/pedestriantactics/cybertruck-simulator/releases/download/PT-G3/cybertrucksimulator-mac.dmg"
					>Download for Mac</a
				>
			</h4>
			<h4>
				<a
					class="highlighted"
					href="https://github.com/pedestriantactics/cybertruck-simulator/releases/download/PT-G3/cybertrucksimulator-windows.exe"
					>Download for Windows</a
				>
			</h4>
		</div>
	</div>
	<div id="top-left">PT-G3</div>
	<div id="bottom-right">
		A game by <a href="http://pedestriantactics.com">Pedestrian Tactics</a>
	</div>
</body>
</Layout>
<style>
	/* add the font PT-F3 */
	@font-face {
		font-family: "F3-Mono-Bold";
		src: url("/fonts/PT-F3Mono-Bold.woff");
	}
	@font-face {
		font-family: "F3-Mono-Medium";
		src: url("/fonts/PT-F3Mono-Medium.woff");
	}

	@font-face {
		font-family: "F3-Mono-Regular";
		src: url("/fonts/PT-F3Mono-Regular.woff");
	}

	@font-face {
		font-family: "F3-Mono-Light";
		src: url("/fonts/PT-F3Mono-Light.woff");
	}

	:root {
		background-color: black;
		color: white;
		font-size: 12pt;
		margin-bottom: 0.5em;
	}

	body {
		color: white;
	}

	a,
	a:hover,
	a:visited,
	a:focus {
		color: white;
		border-color: white;
	}

	#video-container {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		z-index: -1; /* Ensure the video stays in the background */
	}

	#video-container video {
		/* align to the center and make height 100% */
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		min-width: 100%;
		min-height: 100%;
		width: auto;
	}

	#top-left,
	#bottom-right,
	#bottom-right a {
		font-family: "F3-Mono-Medium", monospace;
		font-size: 10pt;
		text-transform: uppercase;
		letter-spacing: 0.05rem;
		border-bottom: none;
	}

	/* top left will be fixed to the top left */
	#top-left {
		position: fixed;
		top: 1rem;
		left: 1rem;
	}

	/* bottom right will be fixed to the bottom right */
	#bottom-right {
		position: fixed;
		bottom: 1rem;
		right: 1rem;
	}

	#container {
		/* align content to the center horizontally and vertically */
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		/* height: 100%; */
		text-align: center;
	}

	#main-img {
		width: 50vw;
		margin-bottom: 0;
	}

	/* h1 {
		font-family: "F3-Mono-Regular", monospace;
		font-size: 4vw;
		text-transform: uppercase;
		font-weight: 80;
		letter-spacing: 1.4vw
	} */

	.highlighted {
		color: black !important;
		background-color: white;
	}

	.section {
		margin-bottom: 2rem;
	}

	/* create a breakpoint where the logo changes width at 520px */
	@media (max-width: 520px) {
		#main-img {
			width: 80vw;
		}
	}

	/* create a breakpoint at 520 height where the logo height goes to 30vh */
	@media (max-height: 520px) {
		#main-img {
			height: 40vh;
			width: auto;
		}
	}
</style>
