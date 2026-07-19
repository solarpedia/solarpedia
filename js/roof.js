document.getElementById("calculateRoof").addEventListener("click", function () {

    const size = parseFloat(document.getElementById("systemSize").value);

    if (isNaN(size) || size <= 0) {
        alert("Please enter a valid solar system size.");
        return;
    }

    // Approximate values for 550W panels
    const areaPerKW = 100; // sq. ft.
    const panelWatt = 550;

    const roofArea = size * areaPerKW;
    const panels = Math.ceil((size * 1000) / panelWatt);

    document.getElementById("roofArea").textContent =
        roofArea.toLocaleString("en-IN");

    document.getElementById("panelCount").textContent =
        panels;

});
