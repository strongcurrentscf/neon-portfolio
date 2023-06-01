"use strict";

const header = document.getElementById("header");
const nameHero = document.getElementById("neon-name-text");

const nav = document.getElementById("nav");
const arrows = document.getElementById("arrows");
const navHeight = nav.getBoundingClientRect().height;

const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");

// * Sticky navigation: Intersection Observer API

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) {
//     nav.classList.add("sticky");
//     arrows.classList.add("hidden");
//   }
//   else {
//     nav.classList.remove("sticky");
//     arrows.classList.remove("hidden");
//   }
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

// * Scroll Into View *

nameHero.addEventListener("click", function (e) {
  aboutSection.scrollIntoView({ behavior: "smooth" });
});

arrows.addEventListener("click", function (e) {
  projectsSection.scrollIntoView({ behavior: "smooth" });
});

// * Scroll-up to display menu *

let lastScroll = 0;
window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && lastScroll > 100) {
    // User scrolled down
    hideNavbar();
  } else {
    // User scrolled up
    showNavbar();
  }
  lastScroll = currentScroll;
});

function hideNavbar() {
  if (!nav.classList.contains("show")) {
    return;
  }
  nav.classList.remove("show");
}

function showNavbar() {
  if (nav.classList.contains("show")) {
    return;
  }
  nav.classList.add("show");
}
// Show nav on script-load
showNavbar();

// * Menu hover fade animation *

const handleHover = function (e) {
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link
      .closest(".links__container")
      .querySelectorAll(".nav__link");
    // const logo = link.closest('.nav').querySelector('img');

    siblings.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    // logo.style.opacity = this;
  }
};
// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

console.log("script_end-main.js");