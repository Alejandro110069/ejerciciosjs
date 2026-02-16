console.log(" Ejercicio 1 ");

function contrasenaValida(password) {
  return password === "sd54s1d1s2d" || password === "4sd4s6d5sd";
}
console.log(contrasenaValida("4sd4s6d5sd")); //true
console.log(contrasenaValida("sd54s1d1s2d")); //true

console.log(contrasenaValida("12345")); //false
