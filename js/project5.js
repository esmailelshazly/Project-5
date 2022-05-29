let button = document.querySelector(".button-two");
let btn = document.querySelector(".btn-two");
let header = document.querySelector(".header");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    button.classList.add("btn-two");
    if (window.scrollY >= 200) {
      header.style.backGround = "crimson"
    } else {
      header.style.backGround = "none"
    }
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
