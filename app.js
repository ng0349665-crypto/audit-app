let gps="";

// GPS
function getGPS(){
navigator.geolocation.getCurrentPosition(function(pos){
gps = pos.coords.latitude + "," + pos.coords.longitude;
document.getElementById("gps").innerText = gps;
});
}

// 簽名
const canvas = document.getElementById("sign");
const ctx = canvas.getContext("2d");
let drawing=false;

canvas.addEventListener("mousedown",()=>drawing=true);
canvas.addEventListener("mouseup",()=>drawing=false);
canvas.addEventListener("mousemove",draw);

function draw(e){
if(!drawing) return;
ctx.lineWidth=2;
ctx.lineCap="round";
ctx.lineTo(e.offsetX,e.offsetY);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(e.offsetX,e.offsetY);
}

function clearSign(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}

// 送出資料
function send(){

const data={
caseId:document.getElementById("caseId").value,
auditor:document.getElementById("auditor").value,
result:document.getElementById("result").value,
gps:gps
};

fetch("https://script.google.com/macros/s/AKfycbx2h69jFxIgPEAkoiUAai4uoaxG4HbW7ooSlWGoIchwClrCTtu1u6lnYGSIkiNEMF_9/exec",{
method:"POST",
body:JSON.stringify(data)
});

alert("資料已送出");

}
