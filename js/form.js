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

//log in form

function validateForm() {
  let name = document.forms["myForm"]["name"].value;
  let email = document.forms["myForm"]["email"].value;
  let pass = document.forms["myForm"]["pass"].value;

  if (name == "" && email == "" && pass == "") {
    document.getElementById("error_name").style.display = "block";
    document.getElementById("error_email").style.display = "block";
    document.getElementById("error_pass").style.display = "block";
    //document.getElementById("error_name").style.display = "block";z
  } else {
  }

  if (name == "") {
    document.getElementById("error_name").style.display = "block";
    return false;
  } else {
    document.getElementById("error_name").style.display = "none";
  }
  if (email == "") {
    document.getElementById("error_email").style.display = "block";
    return false;
  } else {
    document.getElementById("error_email").style.display = "none";
  }
  if (pass == "") {
    document.getElementById("error_pass").style.display = "block";
    return false;
  } else {
    document.getElementById("error_email").style.display = "none";
  }
}

function validateForm2() {
  let name2 = document.forms["myForm2"]["name2"].value;
  let email2 = document.forms["myForm2"]["email2"].value;
  let pass2 = document.forms["myForm2"]["pass2"].value;

  if (name2 == "" && email2 == "" && pass2 == "") {
    document.getElementById("error_name2").style.display = "block";
    document.getElementById("error_email2").style.display = "block";
    document.getElementById("error_pass2").style.display = "block";
    //document.getElementById("error_name").style.display = "block";z
  } else {
  }

  if (name2 == "") {
    document.getElementById("error_name2").style.display = "block";
    return false;
  } else {
    document.getElementById("error_name2").style.display = "none";
  }
  if (email2 == "") {
    document.getElementById("error_email2").style.display = "block";
    return false;
  } else {
    document.getElementById("error_email2").style.display = "none";
  }
  if (pass2 == "") {
    document.getElementById("error_pass2").style.display = "block";
    return false;
  } else {
    document.getElementById("error_pass2").style.display = "none";
  }
}

// contact form
const form = document.querySelector("#contactForm");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError_contact_form");
const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
console.log(form);
function validateForm3(event) {
  event.preventDefault();

  //console.log("hello");

  if (checkLength(firstName.value, 0) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 3) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (validateEmail(email.value, 24) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(message.value, 0) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }
}

form.addEventListener("submit", validateForm3);

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
