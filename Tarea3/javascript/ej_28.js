console.log(" Ejercicio 28 ");

function palabrasANumeros(arreglo) {
  let mapa = {
    cero:0, uno:1, dos:2, tres:3, cuatro:4,
    cinco:5, seis:6, siete:7, ocho:8, nueve:9
  };

  let resultado = [];

  for (let i = 0; i < arreglo.length; i++) {
    if (mapa.hasOwnProperty(arreglo[i])) {
      resultado.push(mapa[arreglo[i]]);
    } else {
      resultado.push(-1);
    }
  }

  return resultado;
}

// código de prueba
console.log(["cero", "uno", "dos", "tres", "what?", "cuatro"]) // [0,
1, 2, 3, -1, 4]
console.log(["cinco", "seis", "siete", "ocho", "nueve"]) // [5, 6, 7,
8, 9]
