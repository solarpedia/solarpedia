document.getElementById("calculateBtn").addEventListener("click", function () {

    const type = document.getElementById("consumerType").value;
    const units = parseFloat(document.getElementById("units").value) || 0;
    const load = parseFloat(document.getElementById("load").value) || 1;

    let energy = 0;

    if(type==="domestic"){

        let u = units;

        if(u>0){

            let slab=Math.min(u,102);
            energy+=slab*5.00;
            u-=slab;

        }

        if(u>0){

            let slab=Math.min(u,78);
            energy+=slab*6.24;
            u-=slab;

        }

        if(u>0){

            let slab=Math.min(u,120);
            energy+=slab*6.89;
            u-=slab;

        }

        if(u>0){

            let slab=Math.min(u,300);
            energy+=slab*7.44;
            u-=slab;

        }

        if(u>0){

            energy+=u*7.61;

        }

    }else{

        alert("Commercial, Agriculture and Industrial tariff will be added in Version 2.");

        return;

    }

    let fixed = load * 15;

    let meter = 30;

    let duty = energy * 0.05;

    let fppca = energy * 0.02;

    let total = energy + fixed + meter + duty + fppca;

    document.getElementById("energyCharge").innerHTML="₹"+energy.toFixed(2);

    document.getElementById("fixedCharge").innerHTML="₹"+fixed.toFixed(2);

    document.getElementById("meterRent").innerHTML="₹"+meter.toFixed(2);

    document.getElementById("duty").innerHTML="₹"+duty.toFixed(2);

    document.getElementById("fppca").innerHTML="₹"+fppca.toFixed(2);

    document.getElementById("totalBill").innerHTML="₹"+total.toFixed(2);

});
