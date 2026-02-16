console.log(" Ejercicio 22 ");

function posiciones(arreglo) {
  let resultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 === 0) {
      resultado.push(i);
    }
  }
  return resultado;
}

// código de prueba
console.log(posiciones([1, 2, 3, 4, 5, 6])) // [1, 3, 5]

console.log(posiciones([])) // []
