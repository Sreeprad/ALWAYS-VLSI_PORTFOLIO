var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

window.addEventListener("scroll", function() {
    let section = document.querySelector(".courses");
    let position = section.getBoundingClientRect().top;
    let screenPosition = window.innerHeight / 1.3;

    if (position < screenPosition) {
        section.classList.add("show");
    } else {
        section.classList.remove("show"); // Remove class when out of view
    }
});
