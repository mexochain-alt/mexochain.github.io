document.addEventListener("DOMContentLoaded",()=>{

const container=document.getElementById("particles");

if(container){

for(let i=0;i<60;i++){

const p=document.createElement("span");

const size=Math.random()*6+2;

p.style.position="absolute";

p.style.width=size+"px";

p.style.height=size+"px";

p.style.borderRadius="50%";

p.style.background="rgba(255,210,70,"+(Math.random()*0.8+0.2)+")";

p.style.left=Math.random()*100+"%";

p.style.top=Math.random()*100+"%";

p.style.boxShadow="0 0 15px rgba(255,200,0,.8)";

p.style.animation=`float ${Math.random()*10+10}s linear infinite`;

p.style.animationDelay=`-${Math.random()*20}s`;

container.appendChild(p);

}

}

const style=document.createElement("style");

style.innerHTML=`

.particles{

position:fixed;

inset:0;

pointer-events:none;

overflow:hidden;

z-index:-2;

}

@keyframes float{

0%{

transform:translateY(120vh) translateX(0);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:translateY(-120vh) translateX(60px);

opacity:0;

}

}

.reveal{

opacity:0;

transform:translateY(60px);

transition:1s;

}

.reveal.active{

opacity:1;

transform:translateY(0);

}

`;

document.head.appendChild(style);

document

.querySelectorAll("section")

.forEach(s=>s.classList.add("reveal"));

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{threshold:.15});

document

.querySelectorAll(".reveal")

.forEach(el=>observer.observe(el));

});
