const userName = document.querySelector("#userName");
const userNameError = document.querySelector("#userNameError");
const passWord = document.querySelector("#passWord");
const passwordError = document.querySelector("#passwordError");
const emailAddress = document.querySelector("#emailAddress");
const emailError = document.querySelector("#emailError");
//const emailError = document.querySelector("#emailError");
//const emailError = document.querySelector("#emailError");

console.log(userName);

function validateForm() {
  event.preventDefault();

  //console.log("hello");

  if (checkLength(userName.value, 0) === true) {
    userNameError.style.display = "none";
  } else {
    userNameError.style.display = "block";
  }

  if (checkLength(passWord.value, 3) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (validateEmail(emailAddress.value, 24) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
