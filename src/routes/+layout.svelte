<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";
	import { afterNavigate } from "$app/navigation";

	let elements: Element[] = [];
	let currentIndex = 0;

	function gatherElements() {
		currentIndex = 0;
		// Select all elements within the body except those with the class 'no-animate' and their descendants
		const elementsList = document.querySelectorAll(
			"body *:not(.no-animate):not(.no-animate *)",
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

		iterate();
	}

	function iterate() {
		if (currentIndex >= elements.length) return;

		const element = elements[currentIndex];
		currentIndex++;

		standardDelay(element as HTMLElement);
	}

	function typeWriter(element: HTMLElement): Promise<void> {
		const originalText = element.textContent || "";
		const typeDelay = 1;
		let typedText = "";
		let i = 0;

		// Clear the element and set opacity to 1
		element.textContent = "";
		element.style.opacity = "1";

		return new Promise((resolve) => {
			const intervalId = setInterval(() => {
				if (i < originalText.length) {
					typedText += originalText.charAt(i);
					i += 1;
					element.textContent = typedText;
				} else {
					clearInterval(intervalId);
					resolve(); // Resolve the promise when typing is complete
				}
			}, typeDelay);
		});
	}

	async function standardDelay(element: HTMLElement) {
		if (element.classList.contains("animate")) {
			// Wait for the typewriter animation to finish before iterating
			await typeWriter(element);
			iterate(); // Call iterate after typeWriter finishes
		} else {
			const delay = 10;
			setTimeout(() => {
				element.style.opacity = "1";
				iterate();
			}, delay);
		}
	}

	afterNavigate(() => {
		gatherElements();
	});
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
