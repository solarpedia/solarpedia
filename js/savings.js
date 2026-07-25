console.log("Savings JS Loaded");

const savingsBtn = document.getElementById("calculateSavings");

if (savingsBtn) {

    savingsBtn.addEventListener("click", function () {

        console.log("Savings Button Clicked");

        const bill = parseFloat(
            document.getElementById("monthlyBill").value
        );

        const reduction = parseFloat(
            document.getElementById("reduction").value
        );

        const years = parseInt(
            document.getElementById("lifetime").value
        );

        if (isNaN(bill) || bill <= 0) {
            alert("Please enter a valid monthly electricity bill.");
            return;
        }

        if (isNaN(reduction) || reduction < 0 || reduction > 100) {
            alert("Please enter a reduction percentage between 0 and 100.");
            return;
        }

        if (isNaN(years) || years <= 0) {
            alert("Please select a valid system lifetime.");
            return;
        }

        const monthlySavings = bill * (reduction / 100);
        const annualSavings = monthlySavings * 12;
        const lifetimeSavings = annualSavings * years;

        // Temporary estimate - we will improve this later
        const co2Reduction =
            (annualSavings / 100) * 0.82 * years;

        document.getElementById("monthlySavings").textContent =
            monthlySavings.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("annualSavings").textContent =
            annualSavings.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("lifetimeSavings").textContent =
            lifetimeSavings.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("co2Savings").textContent =
            co2Reduction.toFixed(0);

        // Show result
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
