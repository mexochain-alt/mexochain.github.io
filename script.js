/*==================================================
MEXOTOKEN
Premium Website
Part 1
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
      Copy Smart Contract
    ==================================*/

    const copyButton = document.getElementById("copyContract");
    const contract = document.getElementById("contract");

    if (copyButton && contract) {

        copyButton.addEventListener("click", async () => {

            try {

                await navigator.clipboard.writeText(
                    contract.textContent.trim()
                );

                const original = copyButton.innerHTML;

                copyButton.innerHTML = "Copied ✓";

                copyButton.style.background = "#18b35d";

                setTimeout(() => {

                    copyButton.innerHTML = original;

                    copyButton.style.background = "";

                }, 2000);

            } catch (err) {

                alert("Copy failed.");

            }

        });

    }

    /*==================================
      Header Scroll Effect
    ==================================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(5,5,5,.96)";
            header.style.backdropFilter = "blur(22px)";
            header.style.boxShadow =
                "0 10px 40px rgba(0,0,0,.45)";

        } else {

            header.style.background = "rgba(5,5,5,.84)";
            header.style.boxShadow = "none";

        }

    });

});

/*==================================================
Navigation Active State
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 140;
        const height = section.offsetHeight;

        if (window.scrollY >= top &&
            window.scrollY < top + height) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*==================================================
Reveal Animation
==================================================*/

const revealItems = document.querySelectorAll(

".about-card,\
.token-card,\
.team-card,\
.roadmap-card,\
.faq-item"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:0.18

}

);

revealItems.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});


/*==================================================
Smooth Hover Buttons
==================================================*/

const buttons = document.querySelectorAll(

".gold-btn,\
.outline-btn,\
.hero-community-btn,\
.launch-btn"

);

buttons.forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-3px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

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
/*==================================================
Hero Logo Parallax
==================================================*/

const heroLogo = document.querySelector(".hero-logo");

document.addEventListener("mousemove", (e) => {

    if (!heroLogo) return;

    const x = (window.innerWidth / 2 - e.clientX) / 45;
    const y = (window.innerHeight / 2 - e.clientY) / 45;

    heroLogo.style.transform =
        `translate(${x}px, ${y}px)`;

});


/*==================================================
Floating Cards Animation
==================================================*/

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    const speed = (index + 1) * 0.8;

    setInterval(() => {

        const offset = Math.sin(Date.now() / 1000 * speed) * 6;

        card.style.transform = `translateY(${offset}px)`;

    }, 30);

});


/*==================================================
Hero Logo Hover
==================================================*/

if (heroLogo) {

    heroLogo.addEventListener("mouseenter", () => {

        heroLogo.style.transition = ".4s ease";
        heroLogo.style.scale = "1.04";

    });

    heroLogo.addEventListener("mouseleave", () => {

        heroLogo.style.scale = "1";

    });

}


/*==================================================
Smooth Scroll For Internal Links
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

        }

    });

});
