function toggleMenu() {
    var hamIcon = document.getElementById("ham-icon");
    var hamNav = document.getElementById("hidden-menu");

    if (hamIcon) {
        hamIcon.classList.toggle("change");
    }

    if (hamNav) {
        hamNav.classList.toggle("active");
    }
}

// Attach the toggleMenu function to the ham-menu-icon
document.getElementById('ham-menu-icon').addEventListener('click', toggleMenu);
