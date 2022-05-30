const arrowUp = document.querySelector(".arrow-up");
const form = document.querySelector(".login-from");
const login = document.querySelector("#login");

const validationForm = (formSelector) => {
  const formElement = document.querySelector(formSelector);

  //const validateionOptions =[
  //  {
  //    attribute: "required",
  //    isvalid: input => input.value.trim() !== "",
  //    errorMessage(input, label) => `${label.textContent} is required`
  //  }
  //]
  //
  const validateSingleFormGroup = (formGroup) => {
    const label = formGroup.querySelector(".arrow-up");
    const loginForm = formGroup.querySelector(".login-form");
    const errorContainer = formGroup.querySelector(".error");
    const errorIcon = formGroup.querySelector(".error-icon");
    const successIcon = formGroup.querySelector(".success-icon");

    for (const option of validateionOptions) {
      if (input.hasAttribute(option.attribute) && !option.isvalid(input)) {
        errorContainer.textContent = option.errorMessage(input, label);
      }
    }
  };

  formElement.setAttribute("no validate", "");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    validateAllFormGroups(formElement);
  });

  const validateAllFormGroups = (formToValidate) => {
    const formGroups = array.from(
      formToValidate.querySelectorAll(".formGroup")
    );

    formGroups.forEach((formGroups) => {
      validateSingleFormGroup(formGroups);
    });
  };
};

validationForm(".login-from");
