// ==========================================
// SolarPedia Article JavaScript
// ==========================================

// Share Links
document.addEventListener("DOMContentLoaded", function () {

    const pageUrl = encodeURIComponent(window.location.href);
    const pageTitle = encodeURIComponent(document.title);

    const facebook = document.getElementById("facebook-share");
    const whatsapp = document.getElementById("whatsapp-share");
    const twitter = document.getElementById("twitter-share");
    const copy = document.getElementById("copy-link");

    if (facebook) {
        facebook.href = "https://www.facebook.com/sharer/sharer.php?u=" + pageUrl;
    }

    if (whatsapp) {
        whatsapp.href = "https://wa.me/?text=" + pageTitle + "%20" + pageUrl;
    }

    if (twitter) {
        twitter.href = "https://twitter.com/intent/tweet?text=" + pageTitle + "&url=" + pageUrl;
    }

    if (copy) {
        copy.addEventListener("click", function () {
            navigator.clipboard.writeText(window.location.href);
            alert("Article link copied successfully!");
        });
    }

});
