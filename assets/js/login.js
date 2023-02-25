// obtener los datos del DOM
const form = document.querySelector(".login-form");
const userField = document.querySelector('#user');
const passwordField = document.querySelector('#password');

// Definir el usuario y la contraseña válidos
const validUser = "admin";
const validPassword = "password";

// escuchar el evento
form.addEventListener("submit", (e) => {
    console.log("submit");
  // Prevenir el comportamiento por defecto
  e.preventDefault();
  // Obtener los valores de los inputs
  const userValue = user.value;
  const passwordValue = password.value;
  // Validar los datos
  if (userValue === validUser && passwordValue === validPassword) {
    alert("Bienvenido");
    window.location.href = "dashboard.html";
  } else {
    alert("Usuario o contraseña incorrectos");
  }
});
