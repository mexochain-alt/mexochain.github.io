// Counter Animation

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter=>{

const target=counter.innerText;

if(!isNaN(parseInt(target))){

let value=0;

const end=parseInt(target);

const timer=setInterval(()=>{

value+=Math.ceil(end/60);

if(value>=end){

value=end;

clearInterval(timer);

}

counter.innerText=value+"B";

},30);

}

});


// Copy Contract

const copyBtn=document.getElementById("copyBtn");

if(copyBtn){

copyBtn.addEventListener("click",()=>{

const address=document.getElementById("contractAddress").innerText;

navigator.clipboard.writeText(address);

copyBtn.innerText="Copied ✓";

setTimeout(()=>{

copyBtn.innerText="Copy Contract";

},2000);

});

}


// Scroll Animation

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.2});

document.querySelectorAll(".feature-card,.stat-card,.timeline-item").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".8s";

observer.observe(el);

});


// Hero Glow

const glow=document.querySelector(".hero-glow");

let angle=0;

setInterval(()=>{

angle+=0.4;

glow.style.transform=

`translate(${Math.sin(angle)*15}px,${Math.cos(angle)*10}px)`;

},30);
