let button = document.querySelector(".button");
let btn = document.querySelector(".btn");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    button.classList.add("btn");
  } else {
    button.classList.remove("btn");
  }
};
button.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
};
