/* ==========================================
   MEXOTOKEN
   Premium Website
========================================== */

document.addEventListener("DOMContentLoaded", () => {

const copyButton = document.getElementById("copyContract");

const contract = document.getElementById("contract");

if (copyButton && contract) {

copyButton.addEventListener("click", async () => {

try {

await navigator.clipboard.writeText(contract.textContent.trim());

const originalText = copyButton.textContent;

copyButton.textContent = "Copied ✓";

copyButton.style.background = "#1ba94c";

setTimeout(() => {

copyButton.textContent = originalText;

copyButton.style.background = "";

}, 2000);

} catch (error) {

alert("Unable to copy contract address.");

}

});

}

});

.hidden{

opacity:0;
transform:translateY(35px);
transition:.8s ease;

}

.show{

opacity:1;
transform:translateY(0);

}

nav a.active{

color:#ffb000;

}

nav a.active::after{

width:100%;

}

/* ==========================================
   Hero Coin Parallax
========================================== */

const heroLogo = document.querySelector(".hero-logo");

document.addEventListener("mousemove", (e) => {

if (!heroLogo) return;

const x = (window.innerWidth / 2 - e.clientX) / 45;
const y = (window.innerHeight / 2 - e.clientY) / 45;

heroLogo.style.transform =
`translate(${x}px, ${y}px)`;

});


/* ==========================================
   Floating Cards Animation
========================================== */

const cards = document.querySelectorAll(".floating-card");

cards.forEach((card, index) => {

const speed = (index + 1) * 0.6;

setInterval(() => {

const offset = Math.sin(Date.now() / 1200 * speed) * 6;

card.style.transform = `translateY(${offset}px)`;

}, 30);

});


/* ==========================================
   Hero Logo Hover
========================================== */

if (heroLogo) {

heroLogo.addEventListener("mouseenter", () => {

heroLogo.style.transition = ".4s ease";

heroLogo.style.scale = "1.04";

});

heroLogo.addEventListener("mouseleave", () => {

heroLogo.style.scale = "1";

});

}


/* ==========================================
   Buttons Hover Effect
========================================== */

const buttons = document.querySelectorAll(
".gold-btn,.outline-btn,.hero-community-btn,.launch-btn"
);

buttons.forEach(btn => {

btn.addEventListener("mouseenter", () => {

btn.style.transition = ".3s ease";

btn.style.transform = "translateY(-3px)";

});

btn.addEventListener("mouseleave", () => {

btn.style.transform = "translateY(0px)";

});

});
