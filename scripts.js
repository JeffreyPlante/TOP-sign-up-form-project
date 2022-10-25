const form = document.getElementById('user-form')
const pass1 = document.getElementById('pass1')
const pass2 = document.getElementById('pass2')

form.addEventListener ('submit', (e) => {

  let messages = {};

  if (pass1.value !== pass2.value) {
    messages.pass1 = "Passwords do not match";
  }
  
  if (Object.keys(messages).length > 0) {
    e.preventDefault();
    Object.keys(messages).forEach(key => console.log(messages.key));
  }
})
