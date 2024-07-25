//Funciones

//Ejercicio. Escribir una función que calcule si una cadena de texto es un palíndromo y devuelva el valor booleano
//que corresponda. Ejemplo de palíndromo: "Dábale arroz a la zorra el abad"
function formatText(text){
  return text.toLowerCase().replaceAll(" ","");
}

function removeAccents(text){
  const accents ="áéíóúÁÉÍÓÚ";
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < accents.length; ++i){
    if (text.includes(accents.charAt(i))){
      text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
    }
  }
  return text;
}

function reverseString(text){
  let result = "";
  for(let i = text.length -1; i >=0; i--){
    result += text.charAt(i);
  }
  return result;
}

function isPalindrome2(text){
  text = formatText (text);
  text = removeAccents(text);
}





function isPalindrome(text) {
  const accents ="áéíóú";
  const vowels = "aeiou";
 text = text.toLowerCase(text); //antes de comparar 
text = text.replaceAll(" ", ""); //quita espacios 



 
  for (let i = 0; i < text.length / 2; i++) {
    const lChar = text.charAt(i);
    const rChar = text.charAt(text.length - 1 - i);
    if (lChar !== rChar) { //tambien ===
      return false;
    }
    return true;
  }
}
const text = "Dábale arroz a la zorra el abad";
document.getElementById("root").innerHTML = isPalindrome(text);
