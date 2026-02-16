console.log(" Ejercicio 29 ");
function numAsteriscos(arreglo) {
  let contador = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === "*") {
      contador++;
    }
  }
  return contador;
}

// código de prueba

console.log(numAsteriscos(['', '*', '', '*'])) // 2
console.log(numAsteriscos(['*', '*', '*'])) // 3
console.log(numAsteriscos([])) // 0
