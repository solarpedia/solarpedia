document.getElementById("calculateNetMetering").addEventListener("click", function () {

    const generation = parseFloat(document.getElementById("generation").value);
    const consumption = parseFloat(document.getElementById("consumption").value);
    const rate = parseFloat(document.getElementById("rate").value);

    if (isNaN(generation) || generation < 0) {
        alert("Please enter a valid monthly solar generation.");
        return;
    }

    if (isNaN(consumption) || consumption < 0) {
        alert("Please enter a valid monthly electricity consumption.");
        return;
    }

    if (isNaN(rate) || rate <= 0) {
        alert("Please enter a valid electricity rate.");
        return;
    }

    let exportUnits = 0;
    let importUnits = 0;

    if (generation > consumption) {
        exportUnits = generation - consumption;
    } else {
        importUnits = consumption - generation;
    }

    const monthlySavings = Math.min(generation, consumption) * rate;
    const annualSavings = monthlySavings * 12;

    document.getElementById("exportUnits").textContent = exportUnits.toFixed(1);
    document.getElementById("importUnits").textContent = importUnits.toFixed(1);

    document.getElementById("monthlySavings").textContent =
        monthlySavings.toLocaleString("en-IN", { maximumFractionDigits: 0 });

    document.getElementById("annualSavings").textContent =
        annualSavings.toLocaleString("en-IN", { maximumFractionDigits: 0 });

});
