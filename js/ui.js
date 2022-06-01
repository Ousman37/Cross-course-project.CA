const menuContent = document.getElementById("menuContent");
const arrowUp = document.getElementById("arrowUp");
const userName = document.getElementById("userName");
const userNameError = document.getElementById("userNameError");
const passWord = document.getElementById("passWord");
const passwordError = document.getElementById("passwordError");
const emailAddress = document.getElementById("emailAddress");
const emailError = document.getElementById("emailError");

// shopping cart mouseover
menuContent.addEventListener("click", (event) => {
  if (arrowUp.style.display == "none") {
    arrowUp.style.display == "block";
  } else {
    arrowUp.style.display == "none";
  }
  arrowUp.classList.remove("hidden");

  console.log(menuContent);
});

//arrowUp.addEventListener("click", (event) => {
//  if (arrowUp.style.display == "none") {
//    arrowUp.style.display == "block";
//  } else {
//    arrowUp.style.display == "none";
//  }
//  arrowUp.classList.remove("hidden");
//
//  console.log(arrowUp);
//});

///enuContent.addEventListener("click",  (event)
/// event.preventDefault(); // prevents the form from auto submitting

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
