//Jquery image slider
function imgSlider() {
  $(document).ready(() => {
    $(".next").on("click", () => {
      // console.log("clicked");
      var currentImg = $(".active");
      var nextImg = currentImg.next();

      if (nextImg.length) {
        currentImg.removeClass("active").css("z-index", -100);
        nextImg.addClass("active").css("z-index", 100);
      }
    });
    $(".prev").on("click", () => {
      // console.log("clicked");
      var currentImg = $(".active");
      var prevImg = currentImg.prev();

      if (prevImg.length) {
        currentImg.removeClass("active").css("z-index", -100);
        prevImg.addClass("active").css("z-index", 100);
      }
    });
  });
}
//hamburgerHandler
const hamburgerHandler = function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar");

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
};
//Initialize!!(Link Starto!)
const init = () => {
  console.log("JavaScript Injected! Init const called!");
  hamburgerHandler();
  imgSlider();
};

init();
