const texts = document.querySelectorAll(".slide-text");
let index = 0;

function showText() {
    texts.forEach((text, i) => {
        text.classList.remove("active"); // Hide all texts
    });

    texts[index].classList.add("active"); // Show only the current text

    index++;
    if (index >= texts.length) {
        index = 0;
    }
}

setInterval(showText, 3000); // Change text every 3 seconds
showText(); // Start the first text

// Bubble Animation Logic
function createBubble() {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");
    document.querySelector(".background").appendChild(bubble);

    const size = Math.random() * 50 + 10; // Random bubble size
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.left = `${Math.random() * 100}%`;
    bubble.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;

    setTimeout(() => {
        bubble.remove();
    }, 5000); // Remove bubble after animation
}

setInterval(createBubble, 300); // Create new bubbles every 300ms
