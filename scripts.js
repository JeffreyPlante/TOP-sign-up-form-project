const form = document.getElementById('user-form')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')
const errorMessage = document.getElementById('err')
form.noValidate = true;

form.addEventListener ('submit', (e) => {

  if (pass1.value !== pass2.value) {
    e.preventDefault();
    pass1.classList.add("error");
    pass2.classList.add("error");
    errorMessage.classList.add("show-error");
  }
})
