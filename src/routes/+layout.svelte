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

		// temporarily using X to prevent this from running cause it's glitchy
		// if (element.classList.contains("type")) {
		// 	console.log("Element has class 'type'");
		// 	typeWriter(element as HTMLElement, 0);
		// 	return;
		// }
		if (element.classList.contains("scramble")) {
			unscramble(element as HTMLElement);
			return;
		}
		// console.log("Element does not have class 'type'");
		standardDelay(element as HTMLElement, 0);
	}

	function unscramble(element: HTMLElement) {
		const originalText = element.textContent || "";
		const scrambleSpeed = 15;
		let scrambledText = "";
		let i = 0;

		// Clear the element and set opacity to 1
		element.textContent = "";
		element.style.opacity = "1";

		const intervalId = setInterval(() => {
			if (i < originalText.length) {
				const randomChar = String.fromCharCode(
					33 + Math.floor(Math.random() * 94),
				);
				scrambledText += randomChar;
				element.textContent = scrambledText;
				setTimeout(() => {
					scrambledText =
						scrambledText.slice(0, i) + originalText.charAt(i);
					element.textContent = scrambledText;
					i++;
				}, scrambleSpeed);
			} else {
				clearInterval(intervalId);
				iterate();
			}
		}, scrambleSpeed*2);
	}

	function typeWriter(element: HTMLElement, delay: number) {
		const originalText = element.textContent || "";
		const typeSpeed = element.classList.contains("fast-animate") ? 2 : 2;
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
		const duration = element.classList.contains("fast-animate") ? 10 : 34;
		setTimeout(() => {
			element.style.opacity = "1";
			iterate();
		}, duration);
	}

    onMount(() => {
        // Google Analytics setup
        const script1 = document.createElement("script");
        script1.setAttribute("async", "");
        script1.setAttribute("src", "https://www.googletagmanager.com/gtag/js?id=G-K72PDDGNQF");
        document.head.appendChild(script1);

        const script2 = document.createElement("script");
        script2.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K72PDDGNQF');
        `;
        document.head.appendChild(script2);
		// end Google stuff

        gatherElements();
    });

	afterUpdate(() => {
		gatherElements();
	});
</script>

<svelte:head>
	<script defer src="https://umami.catalystsoftworks.com/script.js" data-website-id="b7828a5d-9421-478b-9e4a-0dc218da5435"></script>
</svelte:head>

<slot />

<style>
	.untyped {
		color: transparent;
	}
</style>
