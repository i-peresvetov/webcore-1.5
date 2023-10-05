(function () {
  "use strict";
  const breakpoint = window.matchMedia("(min-width:768px)");
  let mySwiper;
  const breakpointChecker = function () {
    if (breakpoint.matches === true) {
      if (mySwiper !== undefined) mySwiper.destroy(true, true);
      return;
    } else if (breakpoint.matches === false) {
      return enableSwiper();
    }
  };
  const enableSwiper = function () {
    mySwiper = new Swiper(".swiper-container", {
      loop: false,
      slidesPerView: 1.5,
      centeredSlides: true,
      // a11y: true,
      keyboardControl: true,
      grabCursor: true,
      pagination: ".swiper-pagination",
      paginationClickable: true,
    });
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();
})();

let expandButton = document.querySelector(".expand-button");
let brandContainer = document.querySelector(".brand-list-container");

expandButton.addEventListener("click", function () {
  if (expandButton.textContent == "Показать все") {
    expandButton.classList.remove("expand-button--show");
    expandButton.classList.add("expand-button--hide");
    expandButton.textContent = "Скрыть";

    brandContainer.classList.remove("brand-list-container--minimazed");
    brandContainer.classList.add("brand-list-container--expanded");
  } else {
    expandButton.classList.remove("expand-button--hide");
    expandButton.classList.add("expand-button--show");
    expandButton.textContent = "Показать все";

    brandContainer.classList.remove("brand-list-container--expanded");
    brandContainer.classList.add("brand-list-container--minimazed");
  }
});
