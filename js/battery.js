document.getElementById("calculateBattery").addEventListener("click", function () {

    const load = parseFloat(document.getElementById("load").value);
    const backup = parseFloat(document.getElementById("backup").value);
    const voltage = parseFloat(document.getElementById("voltage").value);

    if (isNaN(load) || load <= 0) {
        alert("Please enter a valid load.");
        return;
    }

    if (isNaN(backup) || backup <= 0) {
        alert("Please enter a valid backup time.");
        return;
    }

    const efficiency = 0.85;
    const depthOfDischarge = 0.8;

    const requiredAh = (load * backup) / (voltage * efficiency * depthOfDischarge);

    const batterySize = 150; // 150 Ah battery
    const batteryCount = Math.ceil(requiredAh / batterySize);

    document.getElementById("batteryAh").textContent =
        requiredAh.toFixed(0);

    document.getElementById("batteryCount").textContent =
        batteryCount + " × 150 Ah Batteries";

});
