const form = document.querySelector('form');
const button = document.getElementById('button');
const formFields = document.querySelectorAll(".required") // Captura todos os campos (2 inputs e 1 textarea)

form.addEventListener("submit", function (event) {
  event.preventDefault();

  formFields.forEach((field) => {
    const errorIcon = field.closest(".form-test").querySelector(".icon-error"); // Captura o icone de erro daquele campo
    const errorMessage = field.closest(".form-test").querySelector(".error-message"); // Captura a mensagem de erro daquele campo

    if (field.value === '') {
      errorIcon.style.display = 'block';
      errorMessage.style.opacity = '1';
    } else {
      errorIcon.style.display = 'none';
      errorMessage.style.opacity = '0';
    }
  })
})