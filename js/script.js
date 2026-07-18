console.log("Script Loaded");

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================
       Search Popup
    ========================== */

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

    /* ==========================
       Mobile Menu
    ========================== */

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    if (menuToggle && navbar) {
        menuToggle.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }

    /* ==========================
       Back To Top
    ========================== */

    const backToTop = document.getElementById("backToTop");

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

    /* ==========================
       Counter Animation
    ========================== */

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
                        counter.innerText = target.toLocaleString() + "+";
                    } else {
                        counter.innerText = current.toLocaleString();
                        requestAnimationFrame(update);
                    }

                };

                update();
                observer.unobserve(counter);

            });

        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));

    }

});
