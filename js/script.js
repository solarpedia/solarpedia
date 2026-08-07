console.log("SolarPedia Script Loaded");

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       HERO SLIDER
    ===================================================== */

    const slides = document.querySelectorAll(".hero-slider .slide");
    const dots = document.querySelectorAll(".hero-slider .dot");
    const prevButton = document.querySelector(".hero-slider .prev");
    const nextButton = document.querySelector(".hero-slider .next");

    let currentSlide = 0;
    let slideTimer;


    function showSlide(index) {

        if (slides.length === 0) return;

        // Keep index inside range
        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        currentSlide = index;


        /* Remove active from all slides */
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });


        /* Add active to current slide */
        slides[currentSlide].classList.add("active");


        /* Update dots */
        dots.forEach((dot, i) => {
            dot.classList.toggle(
                "active",
                i === currentSlide
            );
        });
    }


    function nextSlide() {
        showSlide(currentSlide + 1);
    }


    function previousSlide() {
        showSlide(currentSlide - 1);
    }


    /* NEXT BUTTON */
    if (nextButton) {
        nextButton.addEventListener("click", () => {

            nextSlide();

            restartSlider();

        });
    }


    /* PREVIOUS BUTTON */
    if (prevButton) {
        prevButton.addEventListener("click", () => {

            previousSlide();

            restartSlider();

        });
    }


    /* DOT BUTTONS */
    dots.forEach((dot, index) => {

        dot.addEventListener("click", () => {

            showSlide(index);

            restartSlider();

        });

    });


    /* AUTO SLIDE */

    function startSlider() {

        if (slides.length <= 1) return;

        slideTimer = setInterval(() => {

            nextSlide();

        }, 5000);

    }


    function restartSlider() {

        clearInterval(slideTimer);

        startSlider();

    }


    /* START */
    if (slides.length > 0) {

        showSlide(0);

        startSlider();

    }


    /* =====================================================
       SEARCH POPUP
    ===================================================== */

    const openSearch =
        document.getElementById("openSearch");

    const closeSearch =
        document.getElementById("closeSearch");

    const searchPopup =
        document.getElementById("searchPopup");


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


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const navbar =
        document.getElementById("navbar");


    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", () => {

            navbar.classList.toggle("active");

        });

    }


    /* =====================================================
       BACK TO TOP
    ===================================================== */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

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


    /* =====================================================
       COUNTER ANIMATION
    ===================================================== */

    const counters =
        document.querySelectorAll(".counter");


    if (counters.length > 0) {

        const observer =
            new IntersectionObserver((entries) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) return;


                    const counter = entry.target;

                    const target =
                        Number(counter.dataset.target);


                    let current = 0;

                    const increment =
                        Math.ceil(target / 100);


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


    /* =====================================================
       STICKY HEADER
    ===================================================== */

    const header =
        document.querySelector("header");


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
