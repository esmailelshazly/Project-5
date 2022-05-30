let button = document.querySelector(".button-two");
let btn = document.querySelector(".btn-two");
let header = document.querySelector(".header");
let headerSpan = document.querySelector(".header span");
let menu = document.querySelector(".header .menu-icon");
let menuUl = document.querySelector(".header .nav-links");
let menuMove = document.querySelectorAll(".header .nav-links li a");
console.log(menuMove)
window.addEventListener("scroll", function() {
  if (window.scrollY >= 600) {
    button.classList.add("btn-two");
  } else {
    button.classList.remove("btn-two");
  }
});
window.addEventListener("scroll", function() {
  if (window.scrollY >= 100) {
    header.style.backgroundColor = "crimson";
    headerSpan.style.color = "white";
  } else {
    header.style.backgroundColor = "transparent";
    headerSpan.style.color = "crimson";
  }
});
button.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};
menu.onclick = function () {
  menuUl.classList.toggle("show");
};
menuMove.forEach(function (ele) {
  ele.onclick = function() {
    menuUl.classList.remove("show");
  };
});
