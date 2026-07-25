console.log("ROI JS Loaded");

const roiBtn = document.getElementById("calculateROI");

if (roiBtn) {

    roiBtn.addEventListener("click", function () {

        console.log("ROI Button Clicked");

        const cost = parseFloat(
            document.getElementById("installationCost").value
        );

        const subsidy = parseFloat(
            document.getElementById("subsidy").value
        ) || 0;

        const annualSavings = parseFloat(
            document.getElementById("annualSavings").value
        );

        if (isNaN(cost) || cost <= 0) {
            alert("Please enter a valid installation cost.");
            return;
        }

        if (subsidy < 0) {
            alert("Please enter a valid subsidy amount.");
            return;
        }

        if (subsidy >= cost) {
            alert("Subsidy must be less than the installation cost.");
            return;
        }

        if (isNaN(annualSavings) || annualSavings <= 0) {
            alert("Please enter valid annual savings.");
            return;
        }

        const investment = cost - subsidy;

        const payback = investment / annualSavings;

        const totalSavings25 = annualSavings * 25;

        const profit25 = totalSavings25 - investment;

        const roi = (profit25 / investment) * 100;

        document.getElementById("investmentResult").textContent =
            investment.toLocaleString("en-IN");

        document.getElementById("paybackResult").textContent =
            payback.toFixed(1);

        document.getElementById("profitResult").textContent =
            profit25.toLocaleString("en-IN");

        document.getElementById("roiResult").textContent =
            roi.toFixed(1);

        // Show result
        const resultBox = document.getElementById("result");

        if (resultBox) {
            resultBox.style.display = "block";
        }

    });

}
