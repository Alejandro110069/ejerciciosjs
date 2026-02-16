console.log(" Ejercicio 24 ");
function empiezanConA(arreglo) {
  let resultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i][0].toLowerCase() === "a") {
      resultado.push(arreglo[i]);
    }
  }
  return resultado;
}

// código de prueba
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"])) //
["alfa", "Arbol"]
console.log(empiezanConA(["beta", "delta", "gama"])) // []
console.log(empiezanConA([])) // []
