document.addEventListener("click", (e) => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]");
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]");
    currentDropdown.classList.toggle("active");
  }

  document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove("active");
  });
  console.log("menuContent");
});

///enuContent.addEventListener("click",  (event)
/// event.preventDefault(); // prevents the form from auto submitting

//const form = document.querySelector("#contactForm");

const userName = document.querySelector("#username");
const userNameError = document.querySelector("#userNameError");

const passWord = document.querySelector("#passWord");
const passwordError = document.querySelector("#passwordError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

console.log(userName);
function validateForm(event) {
  event.preventDefault();

  //console.log("hello");

  if (checkLength(userName.value, 0) === true) {
    userNameError.style.display = "none";
  } else {
    userNameError.style.display = "block";
  }

  if (checkLength(passWord.value, 6) === true) {
    passwordError.style.display = "none";
  } else {
    passwordError.style.display = "block";
  }

  if (validateEmail(email.value, 24) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  //if (checkLength(message.value, 0) === true) {
  //  messageError.style.display = "none";
  //} else {
  //  messageError.style.display = "block";
  //}
}

form.addEventListener("login", validateForm);

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
