document.getElementById("calculateEMI").addEventListener("click", function () {

    const systemCost = parseFloat(document.getElementById("loanAmount").value);
    const downPayment = parseFloat(document.getElementById("downPayment").value) || 0;
    const annualRate = parseFloat(document.getElementById("interestRate").value);
    const years = parseInt(document.getElementById("loanYears").value);

    if (isNaN(systemCost) || systemCost <= 0) {
        alert("Please enter a valid solar system cost.");
        return;
    }

    if (downPayment > systemCost) {
        alert("Down payment cannot be greater than the system cost.");
        return;
    }

    const principal = systemCost - downPayment;
    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const emi =
        (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

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

});
