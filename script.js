const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const button = document.getElementById('button');


const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const messageError = document.getElementById('error-message');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === "") {
    nameError.style.opacity = '1';
  }

  if (emailInput.value.trim() === "") {
    emailError.style.opacity = '1';
  }

  if (messageInput.value.trim() === "") {
    messageError.style.opacity = '1';
  }
})

// Disable alert when something is typed in the invalid field 
emailInput.addEventListener('input', function () {
  emailError.style.opacity = '0';
});

messageInput.addEventListener('input', function () {
  messageError.style.opacity = '0';
});

nameInput.addEventListener('input', function () {
  nameError.style.opacity = '0';
});

