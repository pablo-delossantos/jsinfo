let value = prompt("¿Cual es el nombre oficial de JavaScript?", "");

if (value == "ECMAScript") {
  alert("Correcto")
} else {
  alert("No sabes? ECMAScript!")
}

// ===================

let numero = prompt("Ingrese un número", 0);

if (numero > 0) {
  alert(1)
} else if (numero < 0) {
  alert(-1)
} else {
  alert(0)
}

// ===================

// Reescriba esta condición if usando el operador ternario '?':

// let result;

// if (a + b < 4) {
//   result = "Debajo";
// } else {
//   result = "Encima";
// }

let result = (a + b < 4) ? "Debajo" : "Encima";

// ===================

// Reescriba el 'if..else' con '?'

// Reescriba el if..else utilizando operadores ternarios múltiples'?'.

// Para legibilidad, es recomendad dividirlo en múltiples lineas de código.

let message;

if (login == "Empleado") {
  message = "Hola";
} else if (login == "Director") {
  message = "Felicidades";
} else if (login == "") {
  message = "Sin sesión";
} else {
  message = "";
}

let mensaje = (login == "Empleado") ? "Hola" :
  (login == "Director") ? "Felicidades" :
  (login == "") ? "Sin sesion" : 
  "";