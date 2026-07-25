console.log("Roof Calculator JS Loaded");

const roofBtn = document.getElementById("calculateRoof");

if (roofBtn) {

    roofBtn.addEventListener("click", function () {

        console.log("Roof Calculator Button Clicked");

        const systemSize = parseFloat(
            document.getElementById("systemSize").value
        );

        if (isNaN(systemSize) || systemSize <= 0) {
            alert("Please enter a valid solar system size.");
            return;
        }

        // Approximate roof requirement
        // 1 kW ≈ 100 sq. ft.
        const areaPerKW = 100;

        // Assuming approximately 550 W solar panels
        const panelWattage = 550;

        const roofArea = systemSize * areaPerKW;

        const panelCount = Math.ceil(
            (systemSize * 1000) / panelWattage
        );

        document.getElementById("roofArea").textContent =
            Math.round(roofArea).toLocaleString("en-IN");

        document.getElementById("panelCount").textContent =
            panelCount;

        // Show result
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
