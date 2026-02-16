console.log(" Ejercicio 4 ");
function imprimirArreglo(...elementos) {
  for (let i = 0; i < elementos.length; i++) {
    console.log(elementos[i]);
  }
}
imprimirArreglo(1, "Adios", 2, "Mundo");
