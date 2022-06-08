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
    header.classList.add("padding");
  } else {
    header.style.backgroundColor = "transparent";
    headerSpan.style.color = "crimson";
    header.classList.remove("padding");
  }
});
button.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  });
};
menu.addEventListener("click", function() {
  menuUl.classList.toggle("show");
})
menuMove.forEach(function(ele) {
  ele.onclick = function() {
    menuUl.classList.remove("show");
    spanOne.classList.remove("one");
    spanTwo.classList.remove("two");
    spanThree.classList.remove("three");
  };
});
let spanOne = document.querySelector(".span-one");
let spanTwo = document.querySelector(".span-two");
let spanThree = document.querySelector(".span-three");
menu.addEventListener("click", function() {
  spanOne.classList.toggle("one");
  spanTwo.classList.toggle("two");
  spanThree.classList.toggle("three");
})
var typed = new Typed(".typing", {
  strings: ["Front-end Developer", "YouTuber", "Designer", "Freelancer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
var typed = new Typed(".typing-two", {
  strings: ["Front-end Developing", "Designing"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
