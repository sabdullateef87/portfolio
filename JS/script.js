// let fix the filter item for portfolio

const filterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelectorAll(".portfolio-item"),
  totalPortfolioItems = portfolioItems.length;

// loop through the bottons to add a clikc function
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    // remove any active class initially in the filter container
    filterContainer.querySelector(".active").classList.remove("active");

    // add active class to the current clicked element
    this.classList.add("active");

    const filterValue = this.getAttribute("data-filter");

    //   loop through the items so the you can filter
    for (let k = 0; k < totalPortfolioItems; k++) {
      if (filterValue === portfolioItems[k].getAttribute("data-category")) {
        portfolioItems[k].classList.add("show");
        portfolioItems[k].classList.remove("hide");
      } else {
        portfolioItems[k].classList.add("hide");
        portfolioItems[k].classList.remove("show");
      }
      if (filterValue === "all") {
        portfolioItems[k].classList.add("show");
        portfolioItems[k].classList.remove("hide");
      }
    }
  });
}

// portfolio lightbox
const lightBox = document.querySelector(".lightbox"),
  lightboxImg = lightBox.querySelector(".lightbox-img"),
  lightboxText = lightBox.querySelector(".caption-text"),
  lightboxCounter = lightBox.querySelector(".caption-count");
let itemIndex = 0;

for (let i = 0; i < totalPortfolioItems; i++) {
  portfolioItems[i].addEventListener("click", function () {
    itemIndex = i;
    toggleLightBox();
    changeItem();
  });
}
function changeItem() {
  const imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.querySelector("img").setAttribute("src", imgSrc);
  lightboxCounter.innerHTML = `${itemIndex + 1} of ${totalPortfolioItems}`;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    ".portfolio-info h4"
  ).innerHTML;
}
function toggleLightBox() {
  lightBox.classList.add("open");
}

function previousItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortfolioItems - 1;
  } else {
    itemIndex -= 1;
  }
  changeItem();
}

function nextItem() {
  if (itemIndex === totalPortfolioItems - 1) {
    itemIndex = 0;
  } else {
    itemIndex += 1;
  }
  // lightboxImg.style.animationName = "slideInLeft";
  // lightboxImg.style.animationDuration = `${0.3}s`;
  // lightboxImg.style.animationTimingFunction = "ease";
  changeItem();
}

lightBox.addEventListener("click", function (event) {
  const c = event.target.className;
  if (c === "lightbox-close" || c === "lightbox open") {
    lightBox.classList.remove("open");
  }
});
