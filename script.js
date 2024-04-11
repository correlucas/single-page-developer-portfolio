const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const button = document.getElementById('button');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const nameError = document.getElementById('error-name');
  const nameIconError = nameInput.closest(".form-test").querySelector("img");
  const emailError = document.getElementById('error-email');
  const emailIconError = emailInput.closest(".form-test").querySelector("img");
  const messageError = document.getElementById('error-message');
  const messageIconError = messageInput.closest(".form-test").querySelector("img");

  if (name === "") {
    nameError.style.opacity = '1';
    nameIconError.style.display = "block"
  } else {
    nameError.style.opacity = '0';
    nameIconError.style.display = "none"
  }
  
  if (email === "") {
    emailError.style.opacity = '1';
    emailIconError.style.display = "block"
  } else {
    emailError.style.opacity = '0';
    emailIconError.style.display = "none"
  }
  
  if (message === "") {
    messageError.style.opacity = '1';
    messageIconError.style.display = "block"
  } else {
    messageError.style.opacity = '0';
    messageIconError.style.display = "none"    
  }
})

name.addEventListener('input', function () {
  nameError.style.opacity = '0';
})
