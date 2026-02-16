console.log(" Ejercicio 15 ");

function transcribir(adn) {
  let resultado = "";
  for (let i = 0; i < adn.length; i++) {
    if (adn[i] === "G") resultado += "C";
    else if (adn[i] === "C") resultado += "G";
    else if (adn[i] === "T") resultado += "A";
    else if (adn[i] === "A") resultado += "U";
  }
  return resultado;
}

console.log(transcribir("ACGT"));
console.log(transcribir("ACGTGGTCTTAA"));
