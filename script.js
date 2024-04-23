const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const button = document.getElementById('button');


// BLOCO DE ICONES SELECIONADOS POR ID CLASSE
const nameIcon = document.querySelector('.icon-name');
const emailIcon = document.querySelector('.icon-email');
const messageIcon = document.querySelector('.icon-message');

// BLOCO DE MENSAGEM DE ERROR SELECIONADAS POR ID INDIVIDUALMENTE 
const nameError = document.getElementById('error-name');
const emailError = document.getElementById('error-email');
const messageError = document.getElementById('error-message');

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const name = nameInput.value.trim();
  const message = messageInput.value.trim();
  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nameInput.value.trim() === "") {
    nameError.style.opacity = '1';
    nameIcon.style.display = 'block';
  }

  if (emailInput.value.trim() === "") {
    emailError.style.opacity = '1';
    emailIcon.style.display = 'block';
  }

  if (messageInput.value.trim() === "") {
    messageError.style.opacity = '1';
    messageIcon.style.display = 'block';
  }

  if (!emailRegex.test(email)) {
    emailError.style.opacity = '1';
  }

  if (!nameRegex.test(name)) {
    nameError.style.opacity = '1';
  }
})

// Disable alert when something is typed in the invalid field 
nameInput.addEventListener('input', function () {
  nameError.style.opacity = '0';
  nameIcon.style.display = 'none';
});

emailInput.addEventListener('input', function () {
  emailError.style.opacity = '0';
  emailIcon.style.display = 'none';
});

messageInput.addEventListener('input', function () {
  messageError.style.opacity = '0';
  messageIcon.style.display = 'none';
});



