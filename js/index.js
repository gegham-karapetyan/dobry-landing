let swiper = new Swiper(".swiper-container", {
  effect: "slide",
  hashNavigation: true,
});

const classes = {
  0: "apple",
  1: "tomato",
  2: "appleCitrus",
  3: "multiMix",
};

const homeSlideHeight = document.querySelector(".swiper-slide").offsetHeight;
const header = document.querySelector("header");
const bottomBtns = document.querySelectorAll(".bottom-btn");
const NestedTracksInSwiperSlides = document.querySelectorAll(".second-slider");
const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const aboutUsBtn = document.querySelector("#aboutUs");
const aboutUsPage = document.querySelector(".about-us");
const menuFeedbackPage = document.querySelector(".menu .feedback-page");
const menuFeedbackBtn = document.querySelector("#feedback");
const menuPartTop = document.querySelector(".menu__part-top");
const menuPartBottom = document.querySelector(".menu__part-bottom");
const returnBtn = document.querySelector(".return-btn");
const formNextBtns = document.querySelectorAll(".form__next-btn");
const formPrevBtns = document.querySelectorAll(".form__prev-btn");
const NestedTracksOfFormSlides = document.querySelectorAll(
  "form .inner-slider-track--horizontal"
);

const formSlideWidth = document.querySelector("form").offsetWidth;
console.log(document.querySelector("form").offsetWidth);
let winHeight = window.innerHeight;
let currentScroll;
let isAboutUsPageOpen = false;
let isFeedbackPageOpen = false;

function changeMenuColor() {
  let { activeIndex, previousIndex } = swiper;
  if (previousIndex) {
    removeClassNames(menu, `menu--${classes[previousIndex]}`);
    removeClassNames(menuFeedbackPage, `feedback--${classes[previousIndex]}`);
  }
  addClassNames(menu, `menu--${classes[activeIndex]}`);
  addClassNames(menuFeedbackPage, `feedback--${classes[activeIndex]}`);
}

aboutUsBtn.onclick = function () {
  addClassNames(burger, "burger--rotate");
  addClassNames(menuPartTop, "menu__part-top--active");
  addClassNames(menuPartBottom, "menu__part-bottom--active");
  addClassNames(aboutUsPage, "about-us--active");
  removeClassNames(menuFeedbackBtn, "feedback--active");
  isAboutUsPageOpen = true;
};
menuFeedbackBtn.onclick = function () {
  addClassNames(burger, "burger--rotate");
  addClassNames(menuPartTop, "menu__part-top--active");
  addClassNames(menuPartBottom, "menu__part-bottom--active");
  addClassNames(menuFeedbackBtn, "feedback--active");
  removeClassNames(aboutUsPage, "about-us--active");
  isFeedbackPageOpen = true;
};

burger.onclick = function () {
  if (isAboutUsPageOpen) {
    removeClassNames(burger, "burger--rotate");
    removeClassNames(menuPartTop, "menu__part-top--active");
    removeClassNames(menuPartBottom, "menu__part-bottom--active");
    isAboutUsPageOpen = false;
  } else if (isFeedbackPageOpen) {
    removeClassNames(burger, "burger--rotate");
    removeClassNames(menuPartTop, "menu__part-top--active");
    removeClassNames(menuPartBottom, "menu__part-bottom--active");
    isFeedbackPageOpen = false;
  } else {
    toggleClassNames(menu, "menu--active");
    toggleClassNames(burger, "burger--active");
  }
};

//will be activated when pressing bottom-btn
bottomBtns.forEach((btn, index) => {
  btn.onclick = function () {
    console.log(document.querySelector(".form").clientWidth);
    currentScroll = window.scrollY;
    swiper.allowTouchMove = false;
    //change header classes
    addClassNames(header, "header--sticky", `header--${classes[index]}`);
    //activate return-btn
    addClassNames(
      returnBtn,
      "return-btn--active",
      `return-btn--${classes[index]}`
    );
    NestedTracksInSwiperSlides[
      index
    ].style.transform = `translateY(-${homeSlideHeight}px)`;
    if (winHeight < homeSlideHeight) {
      scroll(0, -currentScroll);
    }
  };
});

returnBtn.onclick = function () {
  let index = swiper.activeIndex;
  removeClassNames(header, "header--sticky", `header--${classes[index]}`);
  removeClassNames(
    returnBtn,
    "return-btn--active",
    `return-btn--${classes[index]}`
  );
  const currentTrack = NestedTracksInSwiperSlides[index];
  currentTrack.style.transform = "translate3d(0,0,0)";
  swiper.allowTouchMove = true;
};

formNextBtns.forEach((btn, index) => {
  console.log(formSlideWidth);
  btn.onclick = function () {
    NestedTracksOfFormSlides[
      index
    ].style.transform = `translateX(-${formSlideWidth}px)`;
  };
});

formPrevBtns.forEach((btn, index) => {
  btn.onclick = function () {
    NestedTracksOfFormSlides[index].style.transform = `translateX(0px)`;
  };
});

changeMenuColor();
swiper.on("slideChange", function () {
  changeMenuColor();
});

function addClassNames(elem, ...rest) {
  rest.forEach((className) => {
    elem.classList.add(className);
  });
}

function removeClassNames(elem, ...rest) {
  rest.forEach((className) => {
    elem.classList.remove(className);
  });
}
function toggleClassNames(elem, ...rest) {
  rest.forEach((className) => {
    if (elem.classList.contains(className)) {
      elem.classList.remove(className);
    } else elem.classList.add(className);
  });
}
