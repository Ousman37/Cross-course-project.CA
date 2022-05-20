console.log(hello, Ben);

const menuBar = document.getElementById("menu-bar");
const nav = document.getElementById("navbar");

if (menuBar) {
  menuBar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

console.log(nav);
