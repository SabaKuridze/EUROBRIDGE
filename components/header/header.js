const header = document.getElementById("nav");
const menu = document.getElementById("menu");

window.addEventListener("scroll", function() {
    if (window.scrollY > 0) {
        header.classList.add("nav-scrolled");
    } else {
        header.classList.remove("nav-scrolled");
    }
});

function myFunction(x) {
    x.classList.toggle("change");
    menu.classList.toggle("visible");
}