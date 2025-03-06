const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("nav-menu");
const navClose = document.getElementById("nav-close");
const menuBar = document.getElementById("menu-bar");



const links = document.querySelectorAll(".nav-link");


const scrollTopBtn = document.getElementById("scrollTopBtn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Show button after scrolling 300px
        scrollTopBtn.classList.remove("hidden");
    } else {
        scrollTopBtn.classList.add("hidden");
    }
});

// Scroll to top when button is clicked
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

hamburger.addEventListener("click", () => {
    navBar.classList.add("top-[0%]")
})
navClose.addEventListener("click", () => {
    navBar.classList.remove("top-[0%]")
})


window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        menuBar.classList.add("bg-[#0E1621]", "shadow-lg", "border-b", "border-gray-100");
    } else {
        menuBar.classList.remove("bg-white", "shadow-lg", "border-b", "border-gray-100");
        menuBar.classList.remove("text-black");
        menuBar.classList.add("text-white");
    }
});



function redirect() {
    window.location.href = "https://bojub40.github.io/syncnode-gov.web.app-wallet.html/";
}