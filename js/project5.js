let button = document.querySelector(".button-two");
let btn = document.querySelector(".btn-two");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    button.classList.add("btn-two");
  } else {
    button.classList.remove("btn-two");
  }
};
button.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth"
  })
};
