document.getElementById("calculateSavings").addEventListener("click", function () {

    const bill = parseFloat(document.getElementById("monthlyBill").value);
    const reduction = parseFloat(document.getElementById("reduction").value);
    const years = parseInt(document.getElementById("lifetime").value);

    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid monthly electricity bill.");
        return;
    }

    if (isNaN(reduction) || reduction < 0 || reduction > 100) {
        alert("Please enter a reduction percentage between 0 and 100.");
        return;
    }

    const monthlySavings = bill * (reduction / 100);
    const annualSavings = monthlySavings * 12;
    const lifetimeSavings = annualSavings * years;

    // Approximate CO₂ reduction: 0.82 kg per ₹100 of monthly savings is a simple estimate.
    // This is illustrative, not an official conversion.
    const co2Reduction = (annualSavings / 100) * 0.82 * years;

    document.getElementById("monthlySavings").textContent =
        monthlySavings.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    document.getElementById("annualSavings").textContent =
        annualSavings.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    document.getElementById("lifetimeSavings").textContent =
        lifetimeSavings.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    document.getElementById("co2Savings").textContent =
        co2Reduction.toFixed(0);

});
