console.log("EMI JS Loaded");

const emiBtn = document.getElementById("calculateEMI");

if (emiBtn) {

    emiBtn.addEventListener("click", function () {

        console.log("EMI Button Clicked");

        const systemCost = parseFloat(
            document.getElementById("loanAmount").value
        );

        const downPayment = parseFloat(
            document.getElementById("downPayment").value
        ) || 0;

        const annualRate = parseFloat(
            document.getElementById("interestRate").value
        );

        const years = parseInt(
            document.getElementById("loanYears").value
        );

        if (isNaN(systemCost) || systemCost <= 0) {
            alert("Please enter a valid solar system cost.");
            return;
        }

        if (downPayment < 0 || downPayment >= systemCost) {
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
            Math.round(principal).toLocaleString("en-IN");

        document.getElementById("emiResult").textContent =
            Math.round(emi).toLocaleString("en-IN");

        document.getElementById("interestResult").textContent =
            Math.round(totalInterest).toLocaleString("en-IN");

        document.getElementById("paymentResult").textContent =
            Math.round(totalPayment).toLocaleString("en-IN");

        // Display result box
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
