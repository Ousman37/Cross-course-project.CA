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
