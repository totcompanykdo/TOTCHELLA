// ===============================
// TOTCHELLA Countdown
// ===============================

const targetDate = new Date("July 29, 2026 22:40:00").getTime()

setInterval(function () {

const now = new Date().getTime();

const distance = targetDate - now;

if(distance <= 0){

document.getElementById("days").textContent = "00";
document.getElementById("hours").textContent = "00";
document.getElementById("minutes").textContent = "00";
document.getElementById("seconds").textContent = "00";

return;

}

document.getElementById("days").textContent =
Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("hours").textContent =
Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

document.getElementById("minutes").textContent =
Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("seconds").textContent =
Math.floor((distance % (1000*60)) / 1000);

},1000);


// ===============================
// VIP Ticket System
// ===============================

let vipTickets = 15;
let vipNumber = 1;

const vipButton = document.getElementById("vipButton");

if(vipButton){

vipButton.onclick = function(){

if(vipTickets<=0) return;

vipTickets--;

document.getElementById("vipCount").textContent = vipTickets;

document.getElementById("ticketNumber").textContent =
"VIP-" + String(vipNumber).padStart(3,"0");

vipNumber++;

document.getElementById("vipTicketCard").style.display = "block";

document.getElementById("vipTicketCard").scrollIntoView({
behavior:"smooth"
});

if(vipTickets===0){

vipButton.textContent="SOLD OUT";

vipButton.disabled=true;

}

}

}