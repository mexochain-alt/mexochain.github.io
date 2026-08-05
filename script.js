// ================================
// MEXOCHAIN
// Premium Script
// ================================

const contractButton = document.getElementById("copyContract");
const contractText = document.getElementById("contract");

if (contractButton) {

contractButton.addEventListener("click",()=>{

navigator.clipboard.writeText(contractText.innerText);

const oldText = contractButton.innerText;

contractButton.innerText="Copied ✓";

setTimeout(()=>{

contractButton.innerText=oldText;

},1800);

});

}

// ===================================
// Reveal Animation
// ===================================

const revealItems=document.querySelectorAll(

".about-card,.token-card,.team-card,.roadmap-card,.faq-item"

);

const revealObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(60px)";

item.style.transition=".8s ease";

revealObserver.observe(item);

});

// ===================================
// Mouse Glow
// ===================================

const glowLeft=document.querySelector(".glow-left");
const glowRight=document.querySelector(".glow-right");

document.addEventListener("mousemove",(e)=>{

const x=e.clientX/window.innerWidth;

const y=e.clientY/window.innerHeight;

if(glowLeft){

glowLeft.style.transform=

`translate(${x*40}px,${y*40}px)`;

}

if(glowRight){

glowRight.style.transform=

`translate(${-x*50}px,${-y*50}px)`;

}

});

// ===================================
// Smooth Header
// ===================================

const header=document.querySelector("header");

window.addEventListener("scroll",()=>{

if(window.scrollY>40){

header.style.background="rgba(5,5,5,.82)";

header.style.boxShadow="0 10px 40px rgba(0,0,0,.35)";

}else{

header.style.background="rgba(5,5,5,.55)";

header.style.boxShadow="none";

}

});

// ===================================
// Floating Hero Logo
// ===================================

const heroLogo=document.querySelector(".hero-logo");

let angle=0;

function animateHero(){

angle+=0.01;

if(heroLogo){

heroLogo.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

}

requestAnimationFrame(animateHero);

}

animateHero();
