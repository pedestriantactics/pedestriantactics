<script lang="ts">
	// create a script that scrambles the text by changing each character to the next character in the unicode table

	import { onMount, afterUpdate } from "svelte";

	const scramble = (element: HTMLElement) => {
		const text = element.textContent ?? "";
		const scrambled = text
			.split("")
			.map((char: string) => String.fromCharCode(char.charCodeAt(0) + 1))
			.join("");
		element.textContent = scrambled;
	};

	// now write an unscramble function that goes through each letter and changes it to the previous letter in the unicode table
	// the function will have a delay between characters to control the speed
	// once the function is done it will log to the console
	function unscramble(element: HTMLElement) {
		const delay = 80;
		const text = element.textContent ?? "";
		let unscrambled = "";
		let i = 0;

		const intervalId = setInterval(() => {
			if (i < text.length) {
				const currentChar = text.charCodeAt(i);
				const targetChar = currentChar - 2;
				const scrambledText = element.textContent ?? "";
				const newText =
					scrambledText.slice(0, i) +
					String.fromCharCode(targetChar) +
					scrambledText.slice(i + 1);
				element.textContent = newText;
				i += 1;
			} else {
				clearInterval(intervalId);
				// console.log("Unscramble complete");
			}
		}, delay);
	}

	let elements: Element[] = [];

	// gather all elements from the page and scramble them in a similar way to how elements are gathered on the layout page
	function gatherElements() {
		// Select all elements within the body except those with the class 'no-animate' and their descendants
		const elementsList = document.querySelectorAll(
			"body *:not(.no-animate):not(.no-animate *)",
		);

		// Filter the elements to include only the desired types
		elements = Array.from(elementsList).filter((element) => {
			return element.classList.contains("scramble");
		});

		// console.log("hello there");

		// Hide all the elements
		elements.forEach((element) => {
			scramble(element as HTMLElement);
			unscramble(element as HTMLElement);
		});
	}

	onMount(() => {
		gatherElements();
	});

	afterUpdate(() => {
		gatherElements();
	});
</script>

<p class="scramble">Hello</p>

<!-- <style>
	[data-scramble] {
		font: 2rem/1.4 monospace;
	}
</style> -->
