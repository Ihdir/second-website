const texts = ['Developer', 'Designer', 'Creator']; // Array of texts
const typewriterText = document.querySelector('.typewriter-text');
let index = 0;
let textIndex = 0;
let deleting = false;
let isFirstLoad = true; // Flag to handle the initial load issue

function type() {
    if (textIndex < texts[index].length) {
        typewriterText.textContent += texts[index][textIndex];
        textIndex++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        deleting = true;
        setTimeout(erase, 2000); // Pause before erasing
    }
}

function erase() {
    if (textIndex > 0 && deleting) {
        typewriterText.textContent = texts[index].substring(0, textIndex - 1);
        textIndex--;
        setTimeout(erase, 50); // Adjust erasing speed here
    } else {
        if (deleting) {
            deleting = false;
            index = (index + 1) % texts.length; // Move to the next text
            textIndex = 0; // Reset textIndex for the new text
            if (isFirstLoad) {
                // Skip immediate re-typing on initial load
                isFirstLoad = false;
                setTimeout(type, 500); // Delay before starting typing
            } else {
                type(); // Start typing the next text
            }
        }
    }
}

// Start typing effect after page load
window.addEventListener('load', () => {
    type();
});
