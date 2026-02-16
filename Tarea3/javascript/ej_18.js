console.log("===== Ejercicio 18 =====");

function max(arreglo) {
  let mayor = arreglo[0];
  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }
  return mayor;
}

// código de prueba
console.log(max([3, 9, 6])) // 9
console.log(max([67, 35, 54, 26])) // 67
