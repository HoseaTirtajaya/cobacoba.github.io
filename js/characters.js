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
};

init();
