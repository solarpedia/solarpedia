console.log("Calculator JS Loaded");

document.addEventListener("DOMContentLoaded", function () {

    console.log("DOM Loaded");

    const btn = document.getElementById("calculateBtn");

    if (!btn) {
        console.error("Button not found!");
        return;
    }

    btn.addEventListener("click", function () {

        console.log("Button Clicked");

        const bill = parseFloat(document.getElementById("bill").value);

        if (isNaN(bill) || bill <= 0) {
            alert("Please enter a valid monthly electricity bill.");
            return;
        }

        let system;

        if (bill <= 1000) system = 1;
        else if (bill <= 2000) system = 2;
        else if (bill <= 3500) system = 3;
        else if (bill <= 5000) system = 5;
        else if (bill <= 8000) system = 7;
        else system = 10;

        document.getElementById("systemSize").textContent = system + " kW";
        document.getElementById("cost").textContent = (system * 60000).toLocaleString("en-IN");
        document.getElementById("saving").textContent = Math.round(bill * 12 * 0.85).toLocaleString("en-IN");
        document.getElementById("area").textContent = system * 100;

        document.getElementById("result").style.display = "block";
    });

});
