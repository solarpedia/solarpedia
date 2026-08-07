document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slider .slide");
    const prevButton = document.querySelector(".hero-slider .prev");
    const nextButton = document.querySelector(".hero-slider .next");
    const dots = document.querySelectorAll(".hero-slider .dot");

    if (!slides.length) {
        console.log("No hero slides found");
        return;
    }

    let currentSlide = 0;
    let autoSlide;

    function showSlide(index) {

        // Keep index inside 0–2
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Hide ALL slides
        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        // Remove active from ALL dots
        dots.forEach(function (dot) {
            dot.classList.remove("active");
        });

        // Show current slide
        slides[currentSlide].classList.add("active");

        // Activate current dot
        if (dots[currentSlide]) {
            dots[currentSlide].classList.add("active");
        }

        console.log("Showing slide:", currentSlide + 1);
    }


    // NEXT BUTTON
    if (nextButton) {
        nextButton.addEventListener("click", function () {
            showSlide(currentSlide + 1);
            restartAutoSlide();
        });
    }


    // PREVIOUS BUTTON
    if (prevButton) {
        prevButton.addEventListener("click", function () {
            showSlide(currentSlide - 1);
            restartAutoSlide();
        });
    }


    // DOT BUTTONS
    dots.forEach(function (dot, index) {

        dot.addEventListener("click", function () {
            showSlide(index);
            restartAutoSlide();
        });

    });


    // AUTOMATIC SLIDER
    function startAutoSlide() {

        autoSlide = setInterval(function () {
            showSlide(currentSlide + 1);
        }, 5000);

    }


    // Restart automatic slider
    function restartAutoSlide() {

        clearInterval(autoSlide);
        startAutoSlide();

    }


    // Start slider
    showSlide(0);
    startAutoSlide();

});
