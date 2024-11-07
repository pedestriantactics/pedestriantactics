<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";

	let elements: Element[] = [];
	let currentIndex = 0;

	function gatherElements() {
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

		// Print all the elements to the console
		console.log(elements);
		console.log("Number of elements: " + elements.length);

		// Reset the index
		currentIndex = 0;

		// Hide all the elements
		elements.forEach((element) => {
			(element as HTMLElement).style.opacity = "0";
		});

		iterate();
	}

	function iterate() {
		console.log("Iterating on element " + currentIndex);
		if (currentIndex >= elements.length) return;

		const element = elements[currentIndex];
		currentIndex++;

		// temporarily using X to prevent this from running cause it's glitchy
		if (element.classList.contains("type")) {
			console.log("Element has class 'type'");
			typeWriter(element as HTMLElement, 0);
		} else {
			console.log("Element does not have class 'type'");
			standardDelay(element as HTMLElement, 0);
		}
	}

	function typeWriter(element: HTMLElement, delay: number) {
		console.log("Typing text");
		const originalText = element.textContent || "";
		const typeSpeed = element.classList.contains("fast-animate")
			? 2
			: 2;
		let typedText = "";
		let i = 0;

		// Clear the element and set opacity to 1
		element.textContent = "";
		element.style.opacity = "1";

		const intervalId = setInterval(() => {
			if (i < originalText.length) {
				typedText += originalText.charAt(i);
				i += 1;
				typedText += originalText.charAt(i);
				i += 1;
				typedText += originalText.charAt(i);
				i += 1;
				typedText += originalText.charAt(i);
				i += 1;
				typedText += originalText.charAt(i);
				i += 1;
				typedText += originalText.charAt(i);
				i += 1;
				element.textContent = typedText;
			} else {
				clearInterval(intervalId);
				iterate();
			}
		}, typeSpeed);
	}

	function standardDelay(element: HTMLElement, delay: number) {
		console.log("Standard delay");
		const duration = element.classList.contains("fast-animate") ? 10 : 24;
		setTimeout(() => {
			element.style.opacity = "1";
			iterate();
		}, duration);
	}

	onMount(() => {
		gatherElements();
	});

	afterUpdate(() => {
		gatherElements();
	});
</script>

<slot />

<style>
	.untyped {
		color: transparent;
	}
</style>
