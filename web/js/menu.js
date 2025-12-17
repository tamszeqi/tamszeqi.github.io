const toggleButton = document.getElementById("menu-toggle");
const menu = document.getElementById("mobile-menu");
const body = document.body;

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Disable scrolling when menu is active
    body.classList.toggle("no-scroll");

    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = "&#9776;"; // ☰ (hamburger)
    }

});