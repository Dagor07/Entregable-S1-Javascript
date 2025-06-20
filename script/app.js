// Mensaje de bienvenida
console.log("Bienvenido al sistema interactivo.");

let userName = prompt("¿Cuál es tu nombre?");

// Validación del nombre
if (userName === null || userName.trim() === "") {
  console.error("Error: El nombre no puede estar vacío.");
} else {
  let userAge = prompt("¿Cuántos años tienes?");
  userAge = Number(userAge); // Convertimos a número

  // Validaciones de la edad
  if (isNaN(userAge)) {
    alert("La edad ingresada no es un número.");
  } else if (!Number.isInteger(userAge)) {
    alert("Error: La edad debe ser un número entero.");
  } else if (userAge <= 0) {
    alert("Error: La edad debe ser mayor que cero.");
  } else {
  
  }
}
function validateData() {
  const nameInput = document.getElementById("name").value;
  const ageInput = document.getElementById("age").value;
  const message = document.getElementById("message");

  const name = nameInput.trim();
  const age = Number(ageInput);

  // Validación del nombre
  if (name === "") {
    message.textContent = "Error: El nombre no puede estar vacío.";
    message.style.color = "red";
    return;
  }

  // Validación de la edad
  if (ageInput === "" || isNaN(age)) {
    message.textContent = "Error: La edad ingresada no es válida.";
    message.style.color = "red";
    return;
  }

  if (!Number.isInteger(age)) {
    message.textContent = "Error: La edad debe ser un número entero.";
    message.style.color = "red";
    return;
  }

  if (age <= 0) {
    message.textContent = "Error: La edad debe ser mayor que cero.";
    message.style.color = "red";
    return;
  }

  // Mensaje personalizado
  if (age < 18) {
    message.textContent = "Hola ${name}, eres menor de edad. Sigue aprendiendo y disfrutando del código.";
    message.style.color = "green";
  } else {
    message.textContent = "Hola ${name}, tienes ${age} años. Es un gran momento para explorar nuevas oportunidades.";
    message.style.color = "green";
  }
}
