console.log(" Ejercicio 13 ");
function removerCeros(arreglo) {
  let nuevo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] !== 0) {
      nuevo.push(arreglo[i]);
    }
  }
  return nuevo;
}

//Pruebas
console.log(removerCeros([0, 1, 0, 2, 0, 3]));
console.log(removerCeros([9, 3, 6, 4]));
console.log(removerCeros([0, 0, 0]));
