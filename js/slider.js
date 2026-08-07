document.addEventListener("DOMContentLoaded", function () {

    const slider = document.querySelector(".hero-slider");

    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const dots = slider.querySelectorAll(".dot");
    const prevBtn = slider.querySelector(".prev");
    const nextBtn = slider.querySelector(".next");

    if (slides.length === 0) return;

    let currentSlide = 0;
    let autoSlide;

    const slideTime = 6000; // 6 seconds


    /* =========================
       SHOW SLIDE
    ========================= */

    function showSlide(index) {

        if (index >= slides.length) {
            index = 0;
        }

        if (index < 0) {
            index = slides.length - 1;
        }

        currentSlide = index;


        /* Remove active from all slides */

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });


        /* Remove active from all dots */

        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });


        /* Add active to current slide */

        slides[currentSlide].classList.add("active");


        /* Add active to current dot */

        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

    }


    /* =========================
       NEXT SLIDE
    ========================= */

    function nextSlide() {
        showSlide(currentSlide + 1);
        restartAutoSlide();
    }


    /* =========================
       PREVIOUS SLIDE
    ========================= */

    function previousSlide() {
        showSlide(currentSlide - 1);
        restartAutoSlide();
    }


    /* =========================
       NEXT BUTTON
    ========================= */

    if (nextBtn) {

        nextBtn.addEventListener("click", function () {
            nextSlide();
        });

    }


    /* =========================
       PREVIOUS BUTTON
    ========================= */

    if (prevBtn) {

        prevBtn.addEventListener("click", function () {
            previousSlide();
        });

    }


    /* =========================
       DOT CLICK
    ========================= */

    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {

            showSlide(index);
            restartAutoSlide();

        });

    });


    /* =========================
       AUTO SLIDE
    ========================= */

    function startAutoSlide() {

        autoSlide = setInterval(function () {

            showSlide(currentSlide + 1);

        }, slideTime);

    }


    /* =========================
       RESTART AUTO SLIDE
    ========================= */

    function restartAutoSlide() {

        clearInterval(autoSlide);

        startAutoSlide();

    }


    /* =========================
       PAUSE WHEN MOUSE IS OVER
    ========================= */

    slider.addEventListener("mouseenter", function () {

        clearInterval(autoSlide);

    });


    /* =========================
       START AGAIN
    ========================= */

    slider.addEventListener("mouseleave", function () {

        startAutoSlide();

    });


    /* =========================
       TOUCH / SWIPE SUPPORT
    ========================= */

    let touchStartX = 0;
    let touchEndX = 0;


    slider.addEventListener("touchstart", function (e) {

        touchStartX = e.changedTouches[0].screenX;

    }, { passive: true });


    slider.addEventListener("touchend", function (e) {

        touchEndX = e.changedTouches[0].screenX;

        const swipeDistance = touchEndX - touchStartX;


        if (Math.abs(swipeDistance) > 50) {

            if (swipeDistance < 0) {

                nextSlide();

            } else {

                previousSlide();

            }

        }

    }, { passive: true });


    /* =========================
       INITIAL SLIDE
    ========================= */

    showSlide(0);

    startAutoSlide();

});
