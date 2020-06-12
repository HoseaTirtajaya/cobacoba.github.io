//Variable Declaration
const username = document.getElementById("Username");
const email = document.getElementById("Email");
const password = document.getElementById("Password");
const dob = document.getElementById("dob");
const submitButton = document.getElementById("submit");

//hamburgerHandler
const hamburgerHandler = function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar");

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
};

function submitValidate() {
  console.log("Validate Function");
  submitButton.addEventListener("click", () => {
    if (username.value == "") {
      alert("Please enter your username.");
    } else if (email.value == "") {
      alert("Please enter your email address.");
    } else if (dob.value == "") {
      alert("Please enter your Date of Birth");
    } else if (password.value == "") {
      alert("Please enter your password");
    } else if (password.value.length < 8) {
      alert("Password cannot less than 8 characters.");
      document.reload();
    } else {
      document.reload();
    }
  });
}

//Initialize!!(Link Starto!)
const init = () => {
  console.log("JavaScript Injected! Init const called!");
  hamburgerHandler();
  submitValidate();
};

init();
