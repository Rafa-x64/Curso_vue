//var nombre = "Rafael Alvarez"; //tipado dinamico (descontinuada)
//let contador = 0; //para valores cambiantes o mutables
const persona = {
  //constante
  nombre: "pedro",
  edad: 12,
  grado: "5to",
  seccion: "A",
};

const Titulo = document.getElementById("titulo");

Titulo.textContent = "Soy un titulo real";

//console.log(Titulo.textContent);

//ejemplo de codigo
const userName = "Ana";
let userScore = 10;

// Modificación básica del DOM
const display = document.getElementById("status");
//display.textContent = `Usuario: ${userName} - Puntos: ${userScore}`;

//mini practica: Declara una constante con tu nombre y una variable para un contador. Al ejecutar el script, el sistema debe buscar un párrafo con ID mensaje y mostrar tu nombre junto al valor del contador usando textContent.

const nombre = `Rafael`
let contador = 0;

const Mensaje = document.querySelector("#mensaje");
Mensaje.textContent = `${nombre} ${contador}`;

console.log(Mensaje.textContent)
