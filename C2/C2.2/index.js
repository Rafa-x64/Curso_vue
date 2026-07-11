const frutas = [
  {
    nombre: "manzana",
    color: "rojo",
  },
  {
    nombre: "pera",
    color: "verde",
  },
  {
    nombre: "banana",
    color: "amarillo",
  },
];

//nuevo array de frutas
const frutasFinal = [
  //spread operator + array antiguo para crear una copia
  ...frutas,
  { //nuevo objeto a agrega
  nombre: "guanabana", 
  color: "verde"
  }

]

console.log(frutasFinal);
