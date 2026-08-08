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
// ==========================================
// Reading Progress Bar
// ==========================================

document.addEventListener("scroll", () => {

    const progress = document.getElementById("reading-progress");

    if (!progress) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    const percent = (scrollTop / docHeight) * 100;

    progress.style.width = percent + "%";

});

// ==========================================
// Back To Top Button
// ==========================================

const backTop = document.getElementById("backToTop");

if(backTop){

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

backTop.classList.add("show");

}else{

backTop.classList.remove("show");

}

});

backTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

// ==========================================
// Smooth TOC Scroll
// ==========================================

document.querySelectorAll('.toc a').forEach(link=>{

link.addEventListener('click',function(e){

const target=document.querySelector(this.getAttribute("href"));

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

}

});

});

// ==========================================
// Reading Time
// ==========================================

const article=document.querySelector(".article");

const reading=document.getElementById("reading-time");

if(article && reading){

const words=article.innerText.trim().split(/\s+/).length;

const minutes=Math.max(1,Math.ceil(words/220));

reading.innerHTML=minutes+" min read";

}

// ==========================================
// Lazy Images
// ==========================================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// ==========================================
// Current Year
// ==========================================

const year=document.getElementById("currentYear");

if(year){

year.textContent=new Date().getFullYear();

}
window.addEventListener("scroll",function(){

const winScroll=document.documentElement.scrollTop;

const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

const scrolled=(winScroll/height)*100;

document.getElementById("readingProgress").style.width=scrolled+"%";

});
/* =====================================================
   SOLARPEDIA NAVIGATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.getElementById("menuToggle");
    const navbar = document.getElementById("navbar");

    /* =========================================
       MOBILE MENU
    ========================================= */

    if (menuToggle && navbar) {

        menuToggle.addEventListener("click", function () {

            navbar.classList.toggle("active");

            const isOpen = navbar.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });

    }


    /* =========================================
       TOOLS DROPDOWN
    ========================================= */

    const dropdown = document.querySelector("#navbar .dropdown");

    if (dropdown) {

        const dropdownLink = dropdown.querySelector(":scope > a");

        if (dropdownLink) {

            dropdownLink.addEventListener("click", function (event) {

                /* Mobile only */

                if (window.innerWidth <= 768) {

                    event.preventDefault();

                    dropdown.classList.toggle("active");

                }

            });

        }

    }


    /* =========================================
       CLOSE MOBILE MENU AFTER LINK CLICK
    ========================================= */

    if (navbar) {

        const links = navbar.querySelectorAll(
            "a:not(.dropdown > a)"
        );

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 768) {

                    navbar.classList.remove("active");

                    if (menuToggle) {
                        menuToggle.setAttribute(
                            "aria-expanded",
                            "false"
                        );
                    }

                }

            });

        });

    }


    /* =========================================
       CLOSE DROPDOWN WHEN CLICKING OUTSIDE
    ========================================= */

    document.addEventListener("click", function (event) {

        if (!dropdown) return;

        if (!dropdown.contains(event.target)) {

            dropdown.classList.remove("active");

        }

    });

});
