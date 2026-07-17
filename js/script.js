console.log("Script Loaded");

document.addEventListener("DOMContentLoaded", function () {

    // Search Popup
    const openSearch = document.getElementById("openSearch");
    const closeSearch = document.getElementById("closeSearch");
    const searchPopup = document.getElementById("searchPopup");

    if (openSearch && closeSearch && searchPopup) {

        openSearch.addEventListener("click", function () {
            searchPopup.classList.add("active");
        });

        closeSearch.addEventListener("click", function () {
            searchPopup.classList.remove("active");
        });

        searchPopup.addEventListener("click", function (e) {
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
