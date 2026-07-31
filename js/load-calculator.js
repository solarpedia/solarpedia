function changeQty(button, change){

    const input = button.parentElement.querySelector(".qty");

    let qty = parseInt(input.value) || 0;

    qty += change;

    if(qty < 0) qty = 0;

    input.value = qty;

    updateRow(button.parentElement.parentElement);

    calculateLoad();

}

function updateRow(row){

    const qty = row.querySelector(".qty");

    const watt = parseFloat(qty.dataset.watt);

    const total = watt * (parseInt(qty.value) || 0);

    row.querySelector(".rowTotal").innerHTML = total + " W";

}

function calculateLoad(){

   let total=0;

let applianceCount=0;

    document.querySelectorAll(".qty").forEach(function(item){

        const watt = parseFloat(item.dataset.watt);

        const qty = parseInt(item.value) || 0;

       total += watt * qty;

if(qty>0){

applianceCount += qty;

}
    });

    const kw = total / 1000;

    const daily = kw * 5;

    const monthly = daily * 30;

    let sanctioned = "";
    let phase = "";
    let solar = "";

    if(kw <= 1){

        sanctioned = "1 kW";
        phase = "Single Phase";
        solar = "1 kWp";

    }

    else if(kw <= 2){

        sanctioned = "2 kW";
        phase = "Single Phase";
        solar = "2 kWp";

    }

    else if(kw <= 3){

        sanctioned = "3 kW";
        phase = "Single Phase";
        solar = "3 kWp";

    }

    else if(kw <= 5){

        sanctioned = "5 kW";
        phase = "Single Phase";
        solar = "5 kWp";

    }

    else if(kw <= 7.5){

        sanctioned = "7.5 kW";
        phase = "Three Phase";
        solar = "6 kWp";

    }

    else if(kw <= 10){

        sanctioned = "10 kW";
        phase = "Three Phase";
        solar = "8 kWp";

    }

    else{

        sanctioned = "Above 10 kW";
        phase = "Three Phase";
        solar = "Custom Design";

    }

    const bill = monthly * 6;
document.getElementById("applianceCount").innerHTML=applianceCount;
    document.getElementById("totalLoad").innerHTML = total.toFixed(0) + " W";

    document.getElementById("totalKW").innerHTML = kw.toFixed(2) + " kW";

    document.getElementById("recommendedLoad").innerHTML = sanctioned;

    document.getElementById("phase").innerHTML = phase;

    document.getElementById("solar").innerHTML = solar;

    document.getElementById("dailyUnits").innerHTML = daily.toFixed(1) + " Units";

    document.getElementById("units").innerHTML = monthly.toFixed(0) + " Units";

    document.getElementById("bill").innerHTML = "₹" + bill.toFixed(0);
    let percent=Math.min((kw/10)*100,100);

document.getElementById("progressFill").style.width=percent+"%";

    if(monthly <= 300){

        document.getElementById("subsidy").innerHTML = "Recommended";

    }else{

        document.getElementById("subsidy").innerHTML = "Large Rooftop Recommended";

    }

}

function resetCalculator(){

    document.querySelectorAll(".qty").forEach(function(item){

        item.value = 0;

    });

    document.querySelectorAll(".rowTotal").forEach(function(item){

        item.innerHTML = "0 W";

    });

    calculateLoad();

}

document.getElementById("searchAppliance").addEventListener("keyup", function(){

    const value = this.value.toLowerCase();

    document.querySelectorAll("#applianceTable tr").forEach(function(row){

        row.style.display = row.innerText.toLowerCase().includes(value) ? "" : "none";

    });

});

calculateLoad();
function downloadPDF() {

    const element = document.querySelector(".total-box");

    const options = {
        margin: 10,
        filename: "SolarPedia-Load-Report.pdf",
        image: {
            type: "jpeg",
            quality: 1
        },
        html2canvas: {
            scale: 2,
            useCORS: true,
            scrollY: 0
        },
        jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait"
        }
    };

    html2pdf().set(options).from(element).save();

}
