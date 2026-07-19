document.getElementById("calculateROI").addEventListener("click", function () {

    const cost = parseFloat(document.getElementById("installationCost").value);
    const subsidy = parseFloat(document.getElementById("subsidy").value) || 0;
    const annualSavings = parseFloat(document.getElementById("annualSavings").value);

    if (isNaN(cost) || isNaN(annualSavings) || cost <= 0 || annualSavings <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const investment = cost - subsidy;
    const payback = investment / annualSavings;
    const profit25 = (annualSavings * 25) - investment;
    const roi = (profit25 / investment) * 100;

    document.getElementById("investmentResult").textContent =
        investment.toLocaleString("en-IN");

    document.getElementById("paybackResult").textContent =
        payback.toFixed(1);

    document.getElementById("profitResult").textContent =
        profit25.toLocaleString("en-IN");

    document.getElementById("roiResult").textContent =
        roi.toFixed(1);

});
