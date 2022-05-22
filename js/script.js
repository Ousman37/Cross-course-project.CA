// Global variables
const menuToggle = document.getElementById("menu-toggle-icon");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

console.log(menuToggle);

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

//
//console.log(navMobile);
//
////Toggle navigation
//const toggleMenu = () => {
//  nav.classList.toggle("active");
//  headerElement.classList.toggle("active");
//};
//
//menuToggleIcon.addEventListener("click", toggleMenu);
//
//// add / remove header border bottom on scroll
//const headerScrollEvent = () => {
//  if (this.scrollY >= 30) {
//    headerElement.classList.add("active-scroll");
//  } else {
//    headerElement.classList.remove("active-scroll");
//  }
//};
//
//window.addEventListener("scroll", headerScrollEvent);
//
//// Add selected link styles to the link clicked and close navigation when clicking the links

//var mainImage = document.getElementById("mainImage");
//var smallImage = document.getElementsByClassName("small-image");
//smallImage[0].onclick = function () {
//  mainImage.src = smallImage[0].src;
//};
//smallImage[1].onclick = function () {
//  mainImage.src = smallImage[1].src;
//};
//smallImage[2].onclick = function () {
//  mainImage.src = smallImage[2].src;
//};
//smallImage[3].onclick = function () {
//  mainImage.src = smallImage[3].src;
//};
//console.log(mainImage);
