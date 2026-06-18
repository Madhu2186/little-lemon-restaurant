/*==============================
    MOBILE MENU
===============================*/

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    if (menuBtn.innerHTML.includes("bars")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
});

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    });
});


/*==============================
    STICKY HEADER
===============================*/

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    } else {

        header.style.background = "#ffffff";
        header.style.boxShadow = "none";

    }

});


/*==============================
    BACK TO TOP BUTTON
===============================*/

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});


/*==============================
    SMOOTH SCROLLING
===============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/*==============================
    BOOKING FORM VALIDATION
===============================*/

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const date = document.getElementById("date").value;

    const time = document.getElementById("time").value;

    if (name === "") {

        alert("Please enter your name.");

        return;

    }

    if (!email.includes("@")) {

        alert("Please enter a valid email.");

        return;

    }

    if (phone.length < 10) {

        alert("Please enter a valid phone number.");

        return;

    }

    if (date === "") {

        alert("Please select a date.");

        return;

    }

    if (time === "") {

        alert("Please select a time.");

        return;

    }

    alert("🎉 Your table has been reserved successfully!");

    bookingForm.reset();

});


/*==============================
    SCROLL REVEAL ANIMATION
===============================*/

const revealElements = document.querySelectorAll(
    ".card, .gallery-item, .testimonial-card, .about-content, .contact-box"
);

function reveal() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", reveal);

reveal();


/*==============================
    ANIMATED COUNTERS
===============================*/

const counters = document.querySelectorAll(".stat h3");

const speed = 100;

function runCounters() {

    counters.forEach(counter => {

        const target = parseInt(counter.innerText);

        let count = 0;

        const update = () => {

            const increment = target / speed;

            if (count < target) {

                count += increment;

                counter.innerText = Math.ceil(count) + "+";

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

}

runCounters();


/*==============================
    IMAGE HOVER EFFECT
===============================*/

document.querySelectorAll(".gallery-item img").forEach(img => {

    img.addEventListener("mouseover", () => {

        img.style.filter = "brightness(110%)";

    });

    img.addEventListener("mouseout", () => {

        img.style.filter = "brightness(100%)";

    });

});


/*==============================
    NEWSLETTER
===============================*/

const newsletterForm = document.querySelector(".newsletter form");

newsletterForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = newsletterForm.querySelector("input").value;

    if (email === "") {

        alert("Please enter your email.");

        return;

    }

    alert("Thank you for subscribing!");

    newsletterForm.reset();

});


/*==============================
    CURRENT YEAR
===============================*/

const copyright = document.querySelector(".copyright");

const year = new Date().getFullYear();

copyright.innerHTML =
`© ${year} Little Lemon Restaurant. All Rights Reserved.`;


/*==============================
    PRELOADER (Optional)
===============================*/

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


/*==============================
    CONSOLE MESSAGE
===============================*/

console.log("🍋 Little Lemon Restaurant Website Loaded Successfully!");

const themeToggle = document.querySelector(".theme-toggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
    }else{
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

});

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.getElementById("loader").style.display="none";

    },1200);

});