console.log("Net Metering JS Loaded");

const netMeteringBtn = document.getElementById("calculateNetMetering");

if (netMeteringBtn) {

    netMeteringBtn.addEventListener("click", function () {

        console.log("Net Metering Button Clicked");

        const generation = parseFloat(
            document.getElementById("generation").value
        );

        const consumption = parseFloat(
            document.getElementById("consumption").value
        );

        const rate = parseFloat(
            document.getElementById("rate").value
        );

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

        const selfConsumedUnits = Math.min(generation, consumption);

        const monthlySavings = selfConsumedUnits * rate;
        const annualSavings = monthlySavings * 12;

        document.getElementById("exportUnits").textContent =
            exportUnits.toFixed(1);

        document.getElementById("importUnits").textContent =
            importUnits.toFixed(1);

        document.getElementById("monthlySavings").textContent =
            monthlySavings.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        document.getElementById("annualSavings").textContent =
            annualSavings.toLocaleString("en-IN", {
                maximumFractionDigits: 0
            });

        // Show result box
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
