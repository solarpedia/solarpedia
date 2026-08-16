console.log("SolarPedia Script Loaded");

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       SEARCH POPUP
    ========================================= */

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


    /* =========================================
       MOBILE MENU
    ========================================= */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });

    }


    /* =========================================
       BACK TO TOP
    ========================================= */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.style.display = "none";

        window.addEventListener("scroll", () => {

            if (window.scrollY > 100) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }

        });

        backToTop.addEventListener("click", () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =========================================
       COUNTER ANIMATION
    ========================================= */

    const counters = document.querySelectorAll(".counter");

    if (counters.length > 0) {

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let current = 0;
                const increment = Math.ceil(target / 100);

                const update = () => {

                    current += increment;

                    if (current >= target) {

                        counter.innerText =
                            target.toLocaleString() + "+";

                    } else {

                        counter.innerText =
                            current.toLocaleString();

                        requestAnimationFrame(update);
                    }

                };

                update();

                observer.unobserve(counter);

            });

        }, {
            threshold: 0.5
        });

        counters.forEach(counter => {
            observer.observe(counter);
        });

    }


    /* =========================================
       HERO SLIDER
    ========================================= */

    const slides = document.querySelectorAll(".hero-slider .slide");
    const prevButton = document.querySelector(".hero-slider .prev");
    const nextButton = document.querySelector(".hero-slider .next");
    const dots = document.querySelectorAll(".hero-slider .dot");

    let currentSlide = 0;
    let autoSlide;


    /* Show selected slide */

    function showSlide(index) {

        if (slides.length === 0) return;

        /* Loop slides */

        if (index >= slides.length) {
            currentSlide = 0;
        }

        else if (index < 0) {
            currentSlide = slides.length - 1;
        }

        else {
            currentSlide = index;
        }


        /* Hide all slides */

        slides.forEach((slide) => {
            slide.classList.remove("active");
        });


        /* Show current slide */

        slides[currentSlide].classList.add("active");


        /* Update dots */

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

    }


    /* =========================================
       NEXT BUTTON
    ========================================= */

    if (nextButton) {

        nextButton.addEventListener("click", () => {

            showSlide(currentSlide + 1);

            restartAutoSlide();

        });

    }


    /* =========================================
       PREVIOUS BUTTON
    ========================================= */

    if (prevButton) {

        prevButton.addEventListener("click", () => {

            showSlide(currentSlide - 1);

            restartAutoSlide();

        });

    }


    /* =========================================
       DOT BUTTONS
    ========================================= */

    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            restartAutoSlide();

        });

    });


    /* =========================================
       AUTOMATIC SLIDER
    ========================================= */

    function startAutoSlide() {

        autoSlide = setInterval(() => {

            showSlide(currentSlide + 1);

        }, 5000);

    }


    /* =========================================
       RESTART AUTO SLIDER
    ========================================= */

    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =========================================
       START HERO SLIDER
    ========================================= */

    if (slides.length > 0) {

        showSlide(0);

        startAutoSlide();

    }


    /* =========================================
       STICKY HEADER
    ========================================= */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }

});

/* =========================================
   SOLARPEDIA SEARCH
========================================= */

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {

    searchInput.addEventListener("input", function () {

        const keyword = this.value.toLowerCase().trim();

        searchResults.innerHTML = "";

        if (keyword === "") {
            return;
        }

        if (typeof articles === "undefined") {
            searchResults.innerHTML =
                '<p class="no-result">Search is currently unavailable.</p>';
            return;
        }

        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(keyword) ||
            article.category.toLowerCase().includes(keyword)
        );

        if (filtered.length === 0) {

            searchResults.innerHTML =
                '<p class="no-result">No articles found.</p>';

            return;
        }

        filtered.forEach(article => {

            searchResults.innerHTML += `
                <a href="${article.url}" class="search-item">
                    <strong>${article.title}</strong>
                    <small>${article.category}</small>
                </a>
            `;

        });

    });

}
