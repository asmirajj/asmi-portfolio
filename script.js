// Toggle Navbar for Mobile View
const navbar = document.querySelector(".dropdown");
const hamburgBtn = document.querySelector(".hamburg");
const cancelBtn = document.querySelector(".cancel");

hamburgBtn?.addEventListener("click", () => {
    navbar?.classList.add("active");
});

cancelBtn?.addEventListener("click", () => {
    navbar?.classList.remove("active");
});

// Typewriter Effect
const texts = [
    "Aspiring Software Engineer",
    "Data Analyst & Visualization Enthusiast",
    "Machine Learning Enthusiast",
    "Problem-Solving & Algorithmic Thinker",
    "Technology & Data-Driven Innovator"
];

const speed = 100;
const eraseSpeed = 50;
const delayBetweenTexts = 1000;

const textElement = document.querySelector(".typewriter-text");
let textIndex = 0;
let characterIndex = 0;

function typeWriter() {
    if (!textElement) return; // Prevent errors if element is missing

    if (characterIndex < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typeWriter, speed);
    } else {
        setTimeout(eraseText, delayBetweenTexts);
    }
}

function eraseText() {
    if (!textElement) return;

    if (textElement.textContent.length > 0) {
        textElement.textContent = textElement.textContent.slice(0, -1);
        setTimeout(eraseText, eraseSpeed);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typeWriter, 500);
    }
}

// Smooth Scroll to Sections
document.querySelectorAll('nav a, .dropdown-more a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });

            // Close mobile menu after clicking a link (optional)
            navbar?.classList.remove("active");
        }
    });
});

// Start typewriter effect after page load
window.addEventListener("load", typeWriter);
