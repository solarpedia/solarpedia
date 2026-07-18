document.getElementById("calculateBtn").addEventListener("click", function () {

    const bill = parseFloat(document.getElementById("bill").value);

    if (isNaN(bill) || bill <= 0) {
        alert("Please enter a valid monthly electricity bill.");
        return;
    }

    let system = 1;

    if (bill <= 1000) {
        system = 1;
    } else if (bill <= 2000) {
        system = 2;
    } else if (bill <= 3500) {
        system = 3;
    } else if (bill <= 5000) {
        system = 5;
    } else if (bill <= 8000) {
        system = 7;
    } else {
        system = 10;
    }

    const cost = system * 60000;
    const saving = bill * 12 * 0.85;
    const area = system * 100;

    document.getElementById("systemSize").textContent = system + " kW";
    document.getElementById("cost").textContent = cost.toLocaleString("en-IN");
    document.getElementById("saving").textContent = Math.round(saving).toLocaleString("en-IN");
    document.getElementById("area").textContent = area;
});
