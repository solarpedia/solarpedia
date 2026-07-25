console.log("EMI JS Loaded");

const emiBtn = document.getElementById("calculateEMI");

if (emiBtn) {

    emiBtn.addEventListener("click", function () {

        console.log("EMI Button Clicked");

        const systemCost =
            parseFloat(document.getElementById("loanAmount").value);

        const downPayment =
            parseFloat(document.getElementById("downPayment").value) || 0;

        const annualRate =
            parseFloat(document.getElementById("interestRate").value);

        const years =
            parseInt(document.getElementById("loanYears").value);

        if (isNaN(systemCost) || systemCost <= 0) {
            alert("Please enter a valid solar system cost.");
            return;
        }

        if (downPayment < 0) {
            alert("Please enter a valid down payment.");
            return;
        }

        if (downPayment >= systemCost) {
            alert("Down payment must be less than the system cost.");
            return;
        }

        if (isNaN(annualRate) || annualRate < 0) {
            alert("Please enter a valid interest rate.");
            return;
        }

        if (isNaN(years) || years <= 0) {
            alert("Please select a valid loan tenure.");
            return;
        }

        const principal = systemCost - downPayment;
        const months = years * 12;
        const monthlyRate = annualRate / 12 / 100;

        let emi;

        // Handle 0% interest correctly
        if (monthlyRate === 0) {

            emi = principal / months;

        } else {

            emi =
                (principal *
                    monthlyRate *
                    Math.pow(1 + monthlyRate, months)) /
                (Math.pow(1 + monthlyRate, months) - 1);
        }

        const totalPayment = emi * months;
        const totalInterest = totalPayment - principal;

        document.getElementById("loanResult").textContent =
            principal.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("emiResult").textContent =
            emi.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("interestResult").textContent =
            totalInterest.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("paymentResult").textContent =
            totalPayment.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        // Show result box
        document.getElementById("result").style.display = "block";

    });

}
