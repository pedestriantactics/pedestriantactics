<script lang="ts">
    import { onMount } from "svelte";

    let elements: Element[] = [];

    function gatherElements() {
        // Select all elements within the body except those with the class 'unscramble' and their descendants
        const elementsList = document.querySelectorAll(
            "body *:not(.no-animate):not(.no-animate *)"
        );

        // Filter the elements to include only the desired types
        elements = Array.from(elementsList).filter((element) => {
            return element.classList.contains("scramble");
        });

        // Hide all the elements
        elements.forEach((element) => {
            (element as HTMLElement).style.opacity = "0";
        });

        iterate();
    }

    function iterate() {
        if (elements.length === 0) return;

        const element = elements.shift() as HTMLElement;
        unscramble(element);
    }

    function unscramble(element: HTMLElement) {
        const originalText = element.textContent || "";
        const scrambleSpeed = 30;
        const unscrambleSpeed = 60;
        let scrambledText = "";
        let i = 0;

        // Clear the element and set opacity to 1
        element.textContent = "";
        element.style.opacity = "1";

        const intervalId = setInterval(() => {
            if (i < originalText.length) {
                const randomChar = String.fromCharCode(
                    33 + Math.floor(Math.random() * 94)
                );
                scrambledText += randomChar;
                element.textContent = scrambledText;
                setTimeout(() => {
                    scrambledText = scrambledText.slice(0, i) + originalText.charAt(i);
                    element.textContent = scrambledText;
                    i++;
                }, unscrambleSpeed);
            } else {
                clearInterval(intervalId);
            }
        }, scrambleSpeed);
    }

    onMount(() => {
        gatherElements();
    });
</script>

<p class="scramble">Hello there</p>