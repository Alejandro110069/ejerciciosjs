console.log(" Ejercicio 31 ");

function distancia(str1, str2) {
  let contador = 0;

  let longitud = Math.max(str1.length, str2.length);

  for (let i = 0; i < longitud; i++) {
    if (str1[i] !== str2[i]) {
      contador++;
    }
  }

  return contador;
}


// código de prueba
console.log(distancia("hola", "hola")) // 0
console.log(distancia("sol", "tol")) // 1
console.log(distancia("carro", "correr")) // 3
