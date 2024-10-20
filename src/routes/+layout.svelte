<script lang="ts">
	import "../reset.css";
	import "../styles.css";

	import { onMount, afterUpdate } from "svelte";

	export function animateElements(duration = 0, delay = 15) {
		const elements = document.querySelectorAll(
			"*:not(.no-animate):not(.no-animate *)",
		);
		elements.forEach((element, index) => {
			setTimeout(() => {
				console.log(
					`Animating element: ${element.tagName}, index: ${index}`,
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
			}, index * delay); // adjust delay for each element
		});
	}

	function setInitialOpacity() {
		const elements = document.querySelectorAll(
			"*:not(.no-animate):not(.no-animate *)",
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
