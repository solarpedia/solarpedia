function calculateLoad(){

let total=0;

const items=document.querySelectorAll(".qty");

items.forEach(function(item){

const watt=parseFloat(item.dataset.watt);

const qty=parseFloat(item.value)||0;

total+=watt*qty;

});

const kw=(total/1000).toFixed(2);

document.getElementById("totalLoad").innerHTML=total.toFixed(0)+" W";

document.getElementById("totalKW").innerHTML=kw+" kW";

let sanctioned="";
let phase="";
let solar="";
let units="";

if(total<=1000){

sanctioned="1 kW";

phase="Single Phase";

solar="1 kW";

}

else if(total<=2000){

sanctioned="2 kW";

phase="Single Phase";

solar="2 kW";

}

else if(total<=3000){

sanctioned="3 kW";

phase="Single Phase";

solar="3 kW";

}

else if(total<=5000){

sanctioned="5 kW";

phase="Single Phase";

solar="5 kW";

}

else if(total<=7500){

sanctioned="7.5 kW";

phase="Three Phase";

solar="6 kW";

}

else if(total<=10000){

sanctioned="10 kW";

phase="Three Phase";

solar="8 kW";

}

else if(total<=15000){

sanctioned="15 kW";

phase="Three Phase";

solar="10 kW";

}

else{

sanctioned="Above 15 kW";

phase="Three Phase";

solar="Custom Design";

}

const monthly=(kw*5*30).toFixed(0);

units=monthly+" Units";

let bill=(monthly*6).toFixed(0);

document.getElementById("bill").innerHTML="₹"+bill;

if(total<=10000){

document.getElementById("subsidy").innerHTML="Eligible for Residential Rooftop Solar";

}else{

document.getElementById("subsidy").innerHTML="Custom Assessment Required";

}
document.getElementById("recommendedLoad").innerHTML=sanctioned;

document.getElementById("phase").innerHTML=phase;

document.getElementById("solar").innerHTML=solar;

document.getElementById("units").innerHTML=units;

}
function resetCalculator(){

document.querySelectorAll(".qty").forEach(function(item){

item.value=0;

});

document.getElementById("totalLoad").innerHTML="0 W";
document.getElementById("totalKW").innerHTML="0 kW";
document.getElementById("recommendedLoad").innerHTML="-";
document.getElementById("phase").innerHTML="-";
document.getElementById("solar").innerHTML="-";
document.getElementById("units").innerHTML="-";

}
