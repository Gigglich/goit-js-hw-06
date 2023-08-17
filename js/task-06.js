const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  const input = event.target;
  const inputLength = input.value.length;
  const requiredLength = Number(input.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});