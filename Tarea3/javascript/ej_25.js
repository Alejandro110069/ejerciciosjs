console.log(" Ejercicio 25 ");

function terminanConS(arreglo) {
  let resultado = [];
  for (let i = 0; i < arreglo.length; i++) {
    let palabra = arreglo[i];
    if (palabra[palabra.length - 1].toLowerCase() === "s") {
      resultado.push(palabra);
    }
  }
  return resultado;
}

// código de prueba
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"])) //
["pruebas", "tokens"]
console.log(terminanConS(["beta", "delta", "gama"])) // []
console.log(terminanConS([])) // []
