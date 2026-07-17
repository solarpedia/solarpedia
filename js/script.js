console.log("SolarPedia Loaded");

// Search Popup

const openSearch = document.getElementById("openSearch");
const closeSearch = document.getElementById("closeSearch");
const searchPopup = document.getElementById("searchPopup");

if (openSearch && closeSearch && searchPopup) {

    openSearch.onclick = () => {
        searchPopup.classList.add("active");
    };

    closeSearch.onclick = () => {
        searchPopup.classList.remove("active");
    };

    window.onclick = (e) => {
        if (e.target === searchPopup) {
            searchPopup.classList.remove("active");
        }
    };
}
// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.onclick = () => {
    navbar.classList.toggle("active");
};
