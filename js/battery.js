console.log("Battery JS Loaded");

const batteryBtn = document.getElementById("calculateBattery");

if (batteryBtn) {

    batteryBtn.addEventListener("click", function () {

        console.log("Battery Button Clicked");

        const load = parseFloat(
            document.getElementById("load").value
        );

        const backup = parseFloat(
            document.getElementById("backup").value
        );

        const voltage = parseFloat(
            document.getElementById("voltage").value
        );

        if (isNaN(load) || load <= 0) {
            alert("Please enter a valid load.");
            return;
        }

        if (isNaN(backup) || backup <= 0) {
            alert("Please enter a valid backup time.");
            return;
        }

        if (isNaN(voltage) || voltage <= 0) {
            alert("Please select a valid battery voltage.");
            return;
        }

        const efficiency = 0.85;
        const depthOfDischarge = 0.8;

        const requiredAh =
            (load * backup) /
            (voltage * efficiency * depthOfDischarge);

        const batterySize = 150;

        const batteryCount =
            Math.ceil(requiredAh / batterySize);

        document.getElementById("batteryAh").textContent =
            Math.ceil(requiredAh).toLocaleString("en-IN");

        document.getElementById("batteryCount").textContent =
            batteryCount + " × 150 Ah Batteries";

        // Show result
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
