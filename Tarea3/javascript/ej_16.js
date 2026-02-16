console.log(" Ejercicio 16 ");

function capitalizar(texto) {
  if (texto.length === 0) return "";
  return texto[0].toUpperCase() + texto.slice(1);
}

console.log(capitalizar("pedro"));
console.log(capitalizar("hola mundo"));
console.log(capitalizar(""));
