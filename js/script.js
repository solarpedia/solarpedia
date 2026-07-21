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
// =============================
// Sticky Header
// =============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});
// =============================
// Solar Calculator
// =============================

const calculateBtn = document.getElementById("calculateBtn");

if (calculateBtn) {

    calculateBtn.addEventListener("click", function () {

        const bill = parseFloat(document.getElementById("bill").value);

        if (isNaN(bill) || bill <= 0) {
            alert("Please enter a valid monthly electricity bill.");
            return;
        }

        // Approximate calculations
        const systemSize = (bill / 1500).toFixed(1);

        const cost = Math.round(systemSize * 65000);

        const saving = Math.round(bill * 12 * 0.8);

        const area = Math.round(systemSize * 100);

        document.getElementById("systemSize").innerText = systemSize + " kW";
        document.getElementById("cost").innerText = cost.toLocaleString("en-IN");
        document.getElementById("saving").innerText = saving.toLocaleString("en-IN");
        document.getElementById("area").innerText = area;

    });

}
