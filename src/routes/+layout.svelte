<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";

	let elements: NodeListOf<Element>;

	let animateDelay = 24;
	let fastAnimateDelay = 10;

	function gatherElements() {
		// Select specific elements within the body except those with the class 'no-animate' and their descendants
		elements = document.querySelectorAll(
			"body img:not(.no-animate):not(.no-animate *), body div:not(.no-animate):not(.no-animate *), body p:not(.no-animate):not(.no-animate *), body a:not(.no-animate):not(.no-animate *), body h1:not(.no-animate):not(.no-animate *), body h2:not(.no-animate):not(.no-animate *), body h3:not(.no-animate):not(.no-animate *), body h4:not(.no-animate):not(.no-animate *)",
		);
	}

	export function animateElements() {
		elements.forEach((element, index) => {
			let delay = animateDelay;
			// check if the element has the class 'fast-animate'
			if (element.classList.contains("fast-animate")) {
				delay = fastAnimateDelay;
			}
			// fade duration, instant for this case
			let duration = 0;
			const elementDelay = index * delay;
			setTimeout(() => {
				console.log(
					`Animating element: ${element.tagName}, index: ${index}, delay: ${elementDelay}`,
				);
				const animation = element.animate(
					[{ opacity: 0 }, { opacity: 1 }],
					{
						duration,
						fill: "forwards", // Ensure the element stays visible after the animation
					},
				);
				animation.onfinish = () => {
					(element as HTMLElement).style.opacity = "1";
				};
			}, elementDelay); // adjust delay for each element
		});
	}

	function setInitialOpacity() {
		elements.forEach((element) => {
			(element as HTMLElement).style.opacity = "0";
		});
	}

	// var i = 0;
	// var txt = "Lorem ipsum dummy text blabla.";
	// var typeSpeed = 50;

	// function typeWriter() {
	// 	if (i < txt.length) {
	// 		document.getElementById("demo").innerHTML += txt.charAt(i);
	// 		i++;
	// 		setTimeout(typeWriter, typeSpeed);
	// 	}
	// }

	onMount(() => {
		gatherElements();
		setInitialOpacity();
		animateElements();
	});

	afterUpdate(() => {
		gatherElements();
		setInitialOpacity();
		animateElements();
	});
</script>

<slot />
