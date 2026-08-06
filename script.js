// ================================
// MEXO TOKEN
// Main Script
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // Mobile Menu
    // ===========================

    const menuBtn = document.querySelector(".menu-toggle");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuBtn && mobileMenu) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuBtn.classList.toggle("active");

        });

    }

    // ===========================
    // Close menu after click
    // ===========================

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

});

// ===========================
// Header Scroll Effect
// ===========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


// ===========================
// Smooth Scroll
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth",

                block: "start"

            });

        }

    });

});

// ===========================
// Reveal Animation
// ===========================

const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// ===========================
// Back To Top on Refresh
// ===========================

if ("scrollRestoration" in history) {

    history.scrollRestoration = "manual";

}

window.addEventListener("load", () => {

    window.scrollTo(0, 0);

});
