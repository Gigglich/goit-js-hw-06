const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); 

  const formData = new FormData(event.target);
  const formDataObject = {};

  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  if (!formDataObject.email || !formDataObject.password) {
    alert("All fields must be filled!");
  } else {
    console.log(formDataObject); 
    loginForm.reset(); 
  }
});
