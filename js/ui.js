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

const form = document.querySelector("#login_form_validation");

const userName = document.querySelector("#login_user_name");
const userNameError = document.querySelector("#login_user_name_error");

const passWord = document.querySelector("#passWord");
const passwordError = document.querySelector("#passwordError");

const email = document.querySelector("#login_user_email");
const emailError = document.querySelector("#login_user_email_error");

console.log(form);
function validateForm(event) {
  event.preventDefault();

  // alert("button click"); login_user_name
  //console.log("hello");

  if (checkLength(userName.value, 5) === true) {
    alert("field is filled.");
    userNameError.style.display = "none";
  } else {
    alert("fill the filed username");
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
