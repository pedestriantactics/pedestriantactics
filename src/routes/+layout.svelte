<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";
	import { afterNavigate } from "$app/navigation";

	let elements: Element[] = [];
	let currentIndex = 0;
	export const byline = "Designed and assembled in various coffee shops and workspaces";
	
	function gatherElements() {
		elements = [];
		currentIndex = 0;
		// Select all elements within the body except those with the class 'no-animate' and their descendants
		const elementsList = document.querySelectorAll(
			"#container *, #title-container *",
		);

		// Filter the elements to include only the desired types
		elements = Array.from(elementsList).filter((element) => {
			return (
				element.tagName === "DIV" ||
				element.tagName === "IMG" ||
				element.tagName === "A" ||
				element.tagName === "P" ||
				element.tagName === "H1" ||
				element.tagName === "H2" ||
				element.tagName === "H3" ||
				element.tagName === "H4"
			);
		});

		// Reset the index
		currentIndex = 0;

		// Hide all the elements
		elements.forEach((element) => {
			(element as HTMLElement).style.opacity = "0";
		});

		// let's add a delay here
		// to make sure the elements are hidden before we start animating
		setTimeout(() => {
			// Start the animation
			iterate();
		}, 180);

		// iterate();
	}

	function iterate() {
		if (currentIndex >= elements.length) return;

		const element = elements[currentIndex];
		currentIndex++;

		standardDelay(element as HTMLElement);
	}

	let intervalId: ReturnType<typeof setInterval> | null = null;
	let timeoutId: ReturnType<typeof setTimeout> | null = null;

	function clearAllTimers() {
		if (intervalId) {
			clearInterval(intervalId);
			intervalId = null;
		}
		if (timeoutId) {
			clearTimeout(timeoutId);
			timeoutId = null;
		}
	}

	afterNavigate(() => {
		clearAllTimers();
		gatherElements();
	});

	// Update typeWriter and standardDelay to use the above timer variables
	function typeWriter(element: HTMLElement): Promise<void> {
		const originalText = element.textContent || "";
		const typeDelay = 5;
		let typedText = "";
		let i = 0;

		element.textContent = "";
		element.style.opacity = "1";

		return new Promise((resolve) => {
			intervalId = setInterval(() => {
				if (i < originalText.length) {
					typedText += originalText.charAt(i);
					i += 1;
					element.textContent = typedText;
				} else {
					if (intervalId) clearInterval(intervalId);
					intervalId = null;
					resolve();
				}
			}, typeDelay);
		});
	}

	async function standardDelay(element: HTMLElement) {
		if (element.classList.contains("animate")) {
			await typeWriter(element);
			iterate();
		} else {
			const delay = 10;
			timeoutId = setTimeout(() => {
				element.style.opacity = "1";
				iterate();
			}, delay);
		}
	}
</script>

<svelte:head>
	{#if import.meta.env.PROD}
		<script
			defer
			src="https://umami.catalystsoftworks.com/script.js"
			data-website-id="b7828a5d-9421-478b-9e4a-0dc218da5435"
		></script>
	{/if}
</svelte:head>

<slot />
