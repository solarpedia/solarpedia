console.log("Subsidy JS Loaded");

const subsidyBtn = document.getElementById("calculateBtn");

if (subsidyBtn) {

    subsidyBtn.addEventListener("click", function () {

        console.log("Subsidy Button Clicked");

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

        document.getElementById("centralSubsidy").innerText =
            centralSubsidy.toLocaleString("en-IN");

        document.getElementById("stateSubsidy").innerText =
            stateSubsidy.toLocaleString("en-IN");

        document.getElementById("totalSubsidy").innerText =
            totalSubsidy.toLocaleString("en-IN");

        document.getElementById("installationCost").innerText =
            installationCost.toLocaleString("en-IN");

        document.getElementById("finalCost").innerText =
            finalCost.toLocaleString("en-IN");

        document.getElementById("annualSavings").innerText =
            annualSavings.toLocaleString("en-IN");

        document.getElementById("payback").innerText = payback;

        // Show result
        document.getElementById("result").style.display = "block";

    });

}
