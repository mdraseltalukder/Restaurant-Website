// mobile menu
const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const mobile_menu = document.getElementById("mobile-menu");
let isMobileMenuOpen = 0;

const restaurant = document.getElementById("restaurant");
const body = document.querySelector("body");
console.log("body");

// open-------------------------
open_menu.addEventListener("click", () => {
  mobile_menu.style.left = "0";
  open_menu.style.display = "none";
  close_menu.style.display = "flex";
});
// close--------------------
close_menu.addEventListener("click", () => {
  mobile_menu.style.left = "-100%";
  close_menu.style.display = "none";
  open_menu.style.display = "flex";
});
