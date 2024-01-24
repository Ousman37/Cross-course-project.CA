// Get references to the menu icon and hidden menu
const menuIcon = document.getElementById("menu-icon");
const hiddenMenu = document.getElementById("hidden-menu");

// Add a click event listener to the menu icon
menuIcon.addEventListener("click", () => {
    // Toggle the "active" class on the menu icon
    menuIcon.classList.toggle("active");
    
    // Toggle the visibility of the hidden menu
    hiddenMenu.style.display = hiddenMenu.style.display === "block" ? "none" : "block";
});
