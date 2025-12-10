/* =======================================================
   GLOBAL STYLES
======================================================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: #0b0b0b;
  color: #fff;
  font-family: 'Poppins', Arial, sans-serif;
  overflow-x: hidden;

  /* Fade-in animation */
  animation: fadeIn 1s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* =======================================================
   NAVIGATION BAR
======================================================= */
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 35px;
  background: #111;
  position: sticky;
  top: 0;
  z-index: 999;

  /* Drop shadow animation */
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition: box-shadow 0.4s ease-in-out;
}

nav:hover {
  box-shadow: 0 0 20px #00c3ff55;
}

nav .logo {
  font-size: 24px;
  font-
     
     function revealOnScroll() {
 // Select all elements with the 'reveal' class
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;

  reveals.forEach((reveal) => {
    const elementTop = reveal.getBoundingClientRect().top;
    const revealPoint = 150; // distance from bottom of viewport

    if (elementTop < windowHeight - revealPoint) {
      reveal.classList.add("active"); // reveal the element
    }
    // NO removal of 'active' so it stays visible
  });
}

// Trigger on scroll and also on page load
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
