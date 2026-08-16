/* =========================================================
   SOLARPEDIA SEARCH
========================================================= */

(function () {

    const articles = [

        {
            title: "সৌর শক্তি কী? What is Solar Energy?",
            url: "/articles/what-is-solar-energy.html",
            category: "Solar Guide"
        },

        {
            title: "PM সূর্য ঘর যোজনার সম্পূর্ণ গাইড",
            url: "/articles/pm-surya-ghar-bengali.html",
            category: "Government Scheme"
        },

        {
            title: "WBSEDCL Unit Tariff 2025-26",
            url: "/articles/wbsedcl-unit-tariff-2025-26.html",
            category: "WBSEDCL"
        },

        {
            title: "কোন Solar Panel আপনার জন্য সেরা? Mono PERC vs TOPCon vs Bifacial",
            url: "/articles/mono-vs-topcon-vs-bifacial.html",
            category: "Solar Guide"
        },

        {
            title: "ভারতে Solar Panel-এর দাম ২০২৬ | 1kW 2kW 3kW 5kW 10kW",
            url: "/articles/solar-panel-price-india-2026.html",
            category: "Solar Price"
        },

        {
            title: "How Solar Works",
            url: "/how-solar-works.html",
            category: "Solar Guide"
        },

        {
            title: "Solar Panels",
            url: "/solar-panels.html",
            category: "Solar Guide"
        },

        {
            title: "Solar Inverter Guide",
            url: "/solar-inverter.html",
            category: "Solar Technology"
        },

        {
            title: "Solar Battery Guide",
            url: "/solar-battery.html",
            category: "Solar Technology"
        },

        {
            title: "Net Metering কী এবং কীভাবে কাজ করে?",
            url: "/net-metering.html",
            category: "Net Metering"
        },

        {
            title: "Solar Guides",
            url: "/solar-guides.html",
            category: "Solar Guide"
        },

        {
            title: "Government Solar Schemes",
            url: "/government-schemes.html",
            category: "Government Scheme"
        },

        {
            title: "PM Surya Ghar Yojana",
            url: "/pm-surya-ghar.html",
            category: "Government Scheme"
        },

        {
            title: "PM KUSUM Yojana",
            url: "/pm-kusum.html",
            category: "Government Scheme"
        },

        {
            title: "State Solar Subsidy",
            url: "/state-subsidy.html",
            category: "Government Scheme"
        },

        {
            title: "Solar Subsidy Finder",
            url: "/subsidy-finder.html",
            category: "Government Scheme"
        },

        {
            title: "Solar Tools and Calculators",
            url: "/tools.html",
            category: "Solar Tools"
        },

        {
            title: "Solar Calculator",
            url: "/calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Solar EMI Calculator",
            url: "/emi-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Solar Savings Calculator",
            url: "/savings-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Solar Battery Calculator",
            url: "/battery-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Solar Roof Calculator",
            url: "/roof-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Solar ROI Calculator",
            url: "/roi-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "Net Metering Calculator",
            url: "/net-metering-calculator.html",
            category: "Solar Calculator"
        },

        {
            title: "WBSEDCL Bill Calculator",
            url: "/wbsedcl-bill-calculator.html",
            category: "Electricity Calculator"
        },

        {
            title: "Electrical Load Calculator",
            url: "/load-calculator.html",
            category: "Electrical Calculator"
        },

        {
            title: "About SolarPedia",
            url: "/about.html",
            category: "SolarPedia"
        },

        {
            title: "Contact SolarPedia",
            url: "/contact.html",
            category: "SolarPedia"
        },

        {
            title: "All Articles",
            url: "/article.html",
            category: "Articles"
        },

        {
            title: "Privacy Policy",
            url: "/privacy-policy.html",
            category: "Legal"
        },

        {
            title: "Disclaimer",
            url: "/disclaimer.html",
            category: "Legal"
        },

        {
            title: "Terms and Conditions",
            url: "/terms.html",
            category: "Legal"
        }

    ];


    /* =========================================================
       SEARCH
    ========================================================= */

    function initSearch() {

        const searchInput = document.getElementById("searchInput");
        const searchResults = document.getElementById("searchResults");

        if (!searchInput || !searchResults) {
            return;
        }


        searchInput.addEventListener("input", function () {

            const keyword = this.value.toLowerCase().trim();

            searchResults.innerHTML = "";


            if (keyword === "") {
                return;
            }


            const filtered = articles.filter(article =>

                article.title.toLowerCase().includes(keyword) ||

                article.category.toLowerCase().includes(keyword)

            );


            if (filtered.length === 0) {

                searchResults.innerHTML = `
                    <p class="no-result">
                        No articles found.
                    </p>
                `;

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


    /* =========================================================
       START SEARCH
    ========================================================= */

    if (document.readyState === "loading") {

        document.addEventListener("DOMContentLoaded", initSearch);

    } else {

        initSearch();

    }

})();
