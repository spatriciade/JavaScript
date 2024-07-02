//console.log('Hello World');
//document.getElementById("root").innerHTML = "Hello World";

//Expresiones if else
//const number = 5;
//let result = "Number "  + number + " is ";
//if (number % 2 === 0) {
//result += "even" ;
//} else {
//result += "odd" ;
//}
//console.log(result);

//Expresión else if
//const number = -5;
//let message;
//if (number > 0) {
//message = `Number ${number} is positive`;
//} else if (number < 0) {
//message = `Number ${number} is negative`;
//} else {
//message = `Number ${number} is zero!!`;
//}
//console.log(message);
//Expresión switch

//const category = "comedy";
//switch (category) {
//case "action":
//console.log("the category selected is action");
//break;
//case "comedy":
//console.log("the category selected is comedy");
//break;
//case "romantic":
//console.log("the category selected is romantic");
//break;
//default:
//console.log("the category selected is other");
//}

//Bucles

//Bucle FOR
//Repite un bloque de código hasta que la condición del bucle sea false.
//const from = 1;
//const to = 8;
//let result = 0;
//for (let i=from; i <= to; i++) {
//result += i;
//}
//console.log(`the summation from ${from} to ${to} is ${result}`);

//ejemplos
//const text = "Hello";
//
//for (let i = 0; i< text.length; i++ ){
//    console.log(text.charAt(i));
//}

//Bucle while
//ejecuta sus instrucciones siempre que una condición se evalúe como true.
//const number = 0;
//const base = 2;
//const exp = 3;
//let result = 1
//while (number < exp) {
//number++ ;
//result *= base;
//}
//console.log(`${base} raised to ${exp} is ${result}`); // output is “2 raised to 3 is 8”

//Bucle do…while
//Un bucle do…while se repite hasta que una condición especificada se evalúe como falsa. La
//diferencia con un bucle while es que el bloque asociado siempre se ejecuta al menos una vez.
// let number = 0;
// const max = 10;
// do {
// number++;
// console.log(number);
// } while (number < max)
//Ejercicio 1. Escribe código Javascript para que, dada una cadena de texto (string), calcule el número de vocales y
//muestre el resultado :
//“Number of vowels is <result>”
//const text = "Hello World this is me";
//const vowels = "aeiou";
//let counter = 0;
//for (let i=0; i<text.length; i++){
//    if(vowels.includes (text.charAt(i).toLowerCase())) {
//        counter++;
//    }
//}
//document.getElementById("root").innerHTML = `Number of vowels is ${counter}`;
//Ejercicio 2. Escribe código Javascript para que, dada una cadena de texto (string), elimine todas las vocales del
//texto y muestre el resultado :
//“H, m lrnng Jvscrpt” // original: “Hi, I am learning Javascript”
//let text = "Hi, I am learning Javascript";
//const vowels = "aeiouAEIOU";
//for ( let i=0; i<vowels.length; i++){
//    const vowel = vowels.charAt(i);
//    if (text.includes(vowel))
//        text = text.replaceAll(vowels," ");
//
//    };
//
//document.getElementById("root").innerHTML = text;

//Funciones
//let number = 2;
//function square(number) {
//return number * number;
//}
//let result = square(2);
//console.log(result);

//Ejercicios
//Ejercicio 1. Modifica cada uno de los ejercicios anteriores para escribir la solución como una función:
//1.Saludo nombre: function greeting(name) {}
//2.Par o impar: function evenOrOdd(num) {}
//3.Contador de vocales: function vowelCounter(text) {}
//4.Eliminar vocales de una cadena de texto: function vowelRemover(text) {



//1
//function greeting(name) {
//  return `Hello, ${name}!`;
//}
//const name = "Alice";
//const greetingMessage = greeting(name);
//console.log(greetingMessage);

//2
//function evenOrOdd(num){
//    if (num % 2 === 0){
//        return "Even";
//    } else {
//        return "Odd";
//    }
//}
//const num = 5;
//const result = evenOrOdd(num);
//console.log(result);

//3
//function vowelCounter(text) {
//  const vowels = "aeiouAEIOU";
//  let counter = 0;
//  for (let i = 0; i < text.length; i++) {
//    if (vowels.includes(text.charAt(i))) counter++;
//  }
//  return counter;
//}
//const text = "Hello World";
//const vowelCount = vowelCounter(text);
//console.log(`Number of vowels is ${vowelCount}`);

//4
//function vowelsRemover(text){
//    const vowels = "aeiouAEIOU";
//for ( let i=0; i<vowels.length; i++){
//const vowel = vowels.charAt(i);
//if (text.includes(vowel))
//text = text.replaceAll(vowel," ");
//}
//return text;
//}
//document.getElementById("root").innerHTML = vowelsRemover("Hi, I am learning JavaSript");
//console.log(vowelsRemover("Hi, I am learning JavaSript"));
//console.log(vowelsRemover("kjdklajdi8yaskhdas"));
//console.log(vowelsRemover("kkkksssyyttttrasdasdoir"));
//console.log(vowelsRemover("kdkasjdashdjashwqeybsad"));

//La funcion permite la llamada repetidas si necesitar que repitas el codigo.