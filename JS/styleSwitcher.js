const links = document.querySelectorAll(".altername-style");
const styleSwitcherIcon = document.querySelector(
  ".style-switcher .switcher-icon"
);
const styleSwitcher = document.querySelector(".style-switcher");
const len = links.length;

function setActiveStyle(color) {
  for (let i = 0; i < len; i++) {
    if (links[i].getAttribute("tag") === color) {
      links[i].removeAttribute("disabled");
    } else {
      links[i].setAttribute("disabled", true);
    }
  }
}

styleSwitcherIcon.addEventListener("click", function () {
  styleSwitcher.classList.toggle("open");
});
