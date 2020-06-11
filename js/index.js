//Variable Declaration.

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

//JavaScript Smooth Scrolling
function smoothScroll() {
  console.log("Smooth Scrolling by Javascript");

  document.querySelectorAll("nav a").forEach(function (anchor, index) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const getHash = anchor.getAttribute("href");
      window.scrollTo({
        top: document.querySelector(getHash).offsetTop,
        left: 0, // We don't need scroll left
        behavior: "smooth",
      });
      history.pushState(null, null, getHash);
    });
  });
}

//Initialize!!(Link Starto!)
const init = () => {
  console.log("JavaScript Injected! Init const called!");
  imgSlider();
  smoothScroll();
};

init();
