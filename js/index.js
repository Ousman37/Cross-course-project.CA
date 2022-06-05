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
