console.log("Script Loaded");

document.addEventListener("DOMContentLoaded", function () {

    // Search Popup
   const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchPopup = document.getElementById("searchPopup");

if (openSearch && closeSearch && searchPopup) {

    openSearch.addEventListener("click", () => {
        searchPopup.classList.add("active");
    });

    closeSearch.addEventListener("click", () => {
        searchPopup.classList.remove("active");
    });

    searchPopup.addEventListener("click", (e) => {
        if (e.target === searchPopup) {
            searchPopup.classList.remove("active");
        }
    });

}
    // Mobile Menu
    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

});

/* ==========================
   Back To Top
========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", function () {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.display = "block";

    } else {

        backToTop.style.display = "none";

    }

});

backToTop?.addEventListener("click", function () {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
/* ==========================
   Counter Animation
========================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if (!entry.isIntersecting) return;

const counter = entry.target;

const target = +counter.dataset.target;

let current = 0;

const increment = Math.ceil(target / 100);

const updateCounter = () => {

current += increment;

if (current >= target) {

counter.innerText = target.toLocaleString() + "+";

} else {

counter.innerText = current.toLocaleString();

requestAnimationFrame(updateCounter);

}

};

updateCounter();

counterObserver.unobserve(counter);

});

}, {

threshold:0.5

});

counters.forEach(counter => {

counterObserver.observe(counter);

});
