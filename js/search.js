const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {

    searchInput.addEventListener("keyup", function () {

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

            searchResults.innerHTML =
                '<p class="no-result">No articles found.</p>';

            return;
        }

        filtered.forEach(article => {

            searchResults.innerHTML += `
                <a href="${article.url}" class="search-item">
                    <strong>${article.title}</strong><br>
                    <small>${article.category}</small>
                </a>
            `;

        });

    });

}
