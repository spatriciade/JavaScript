//Funciones

//Ejercicio. Escribir una función que calcule si una cadena de texto es un palíndromo y devuelva el valor booleano
//que corresponda. Ejemplo de palíndromo: "Dábale arroz a la zorra el abad"

function isPalindrome(text) {
  text = text.toLowerCase(text);
  text = text.replaceAll(" ", "");
  for (let i = 0; i < text.length / 2; i++) {
    const lChar = text.chartAt(i);
    const rChar = text.chartAt(text.length - 1 - i);
    if (lChar !== rChar) {
      return false;
    }
    return true;
  }
}
const text = "Dabale arroz a la zorra el abad";
document.getElementById("root").innerHTML = isPalindrome(text);
