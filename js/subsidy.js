document.getElementById("calculateBtn").addEventListener("click", function () {

    const consumer = document.getElementById("consumerType").value;
    const size = Number(document.getElementById("systemSize").value);

    const costPerKW = 60000;
    const installationCost = size * costPerKW;

    let centralSubsidy = 0;

    if (consumer === "Residential") {

        if (size <= 2) {

            centralSubsidy = size * 30000;

        } else {

            centralSubsidy = 60000 + ((size - 2) * 18000);

            if (centralSubsidy > 78000) {
                centralSubsidy = 78000;
            }

        }

    }

    const stateSubsidy = 0;

    const totalSubsidy = centralSubsidy + stateSubsidy;

    const finalCost = installationCost - totalSubsidy;

    const annualSavings = size * 12000;

    const payback = (finalCost / annualSavings).toFixed(1);

    document.getElementById("centralSubsidy").innerText = centralSubsidy.toLocaleString();

    document.getElementById("stateSubsidy").innerText = stateSubsidy.toLocaleString();

    document.getElementById("totalSubsidy").innerText = totalSubsidy.toLocaleString();

    document.getElementById("installationCost").innerText = installationCost.toLocaleString();

    document.getElementById("finalCost").innerText = finalCost.toLocaleString();

    document.getElementById("annualSavings").innerText = annualSavings.toLocaleString();

    document.getElementById("payback").innerText = payback;

});
