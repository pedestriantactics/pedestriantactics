<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";

	export function animateElements(duration = 0, delay = 14) {
		const elements = document.querySelectorAll(
			"body div:not(.no-animate):not(.no-animate *), body img:not(.no-animate):not(.no-animate *), body p:not(.no-animate):not(.no-animate *), body h1:not(.no-animate):not(.no-animate *), body h2:not(.no-animate):not(.no-animate *), body h3:not(.no-animate):not(.no-animate *), body h4:not(.no-animate):not(.no-animate *)",
		);
		elements.forEach((element, index) => {
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
		const elements = document.querySelectorAll(
			"body div:not(.no-animate):not(.no-animate *), body img:not(.no-animate):not(.no-animate *), body p:not(.no-animate):not(.no-animate *), body h1:not(.no-animate):not(.no-animate *), body h2:not(.no-animate):not(.no-animate *), body h3:not(.no-animate):not(.no-animate *), body h4:not(.no-animate):not(.no-animate *)",
		);
		elements.forEach((element) => {
			(element as HTMLElement).style.opacity = "0";
		});
	}

	onMount(() => {
		setInitialOpacity();
		animateElements();
	});

	afterUpdate(() => {
		setInitialOpacity();
		animateElements();
	});
</script>

<slot />
