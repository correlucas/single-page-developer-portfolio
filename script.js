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
  const emailError = document.getElementById('error-email');
  const messageError = document.getElementById('error-message');

  if (nameInput.value.trim() === "") {
    nameError.style.opacity = '1';
  }

  if (emailInput.value.trim() === "") {
    emailError.style.opacity = '1';
  }

  if (emailInput.value.trim() === "") {
    messageError.style.opacity = '1';
  }
})

name.addEventListener('input', function () {
  nameError.style.opacity = '0';
})
