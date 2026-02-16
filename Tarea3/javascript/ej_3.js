console.log(" Ejercicio 3 ");
function bmi(peso, altura) {
  let indice = peso / (altura * altura);

  if (indice < 18.5) {
    return "Bajo de peso";
  } else if (indice >= 18.5 && indice <= 24.9) {
    return "Normal";
  } else if (indice >= 25 && indice <= 29.9) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

console.log(bmi(55, 1.7));   // "Normal"
console.log(bmi(70, 1.6));   // "Sobrepeso"
console.log(bmi(50, 1.8));  // "Bajo de peso"
console.log(bmi(140, 1.8));  // "Obeso"
