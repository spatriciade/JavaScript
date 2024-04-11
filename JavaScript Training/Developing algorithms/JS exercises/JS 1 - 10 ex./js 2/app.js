//Training JavaScript

// 1. Dias del mes en curso obtenido por el mes real del sistema

//Sol. 1
// let today = new Date();
// let daysInCurrentMonth = new Date(
// today.getFullYear(),
// today.getMonth() + 1,
// 0
// ).getDate();

// console.log("This month has: ", daysInCurrentMonth, " days");

// //Sol.2
// let today2 = new Date();
// let getCurrentMonth = today2.getMonth();
// let answer = "The actual month has: ";
// switch (12) {
//   case 0:
//     console.log(answer + 31 + " days");
//     break;
//   case 1:
//     console.log(answer + 28 + " days");
//     break;
//   case 2:
//     console.log(answer + 31 + " days");
//     break;
//   case 3:
//     console.log(answer + 30 + " days");
//     break;
//   case 4:
//     console.log(answer + 31 + " days");
//     break;
//   case 5:
//     console.log(answer + 30 + " days");
//     break;
//   case 6:
//     console.log(answer + 31 + " days");
//     break;
//   case 7:
//     console.log(answer + 31 + " days");
//     break;
//   case 8:
//     console.log(answer + 30 + " days");
//     break;
//   case 9:
//     console.log(answer + 31 + " days");
//     break;
//   case 10:
//     console.log(answer + 30 + " days");
//     break;
//   case 11:
//     console.log(answer + 31 + " days");
//     break;
//   default:
//     //  answer = "Unknown month";
//     console.log(answer);
//     break;
// }

// 2 Pregunta por el mes e indica los dias que tiene

// let userChoice = prompt("Please, enter a month name:");
// console.log(userChoice);

// switch (userChoice.toLowerCase()) {
//  case "january":
//      console.log(31);
//      alert(31); //another way to show the result
//      break;
//    case "february":
//      console.log(28);
//      break;
//    case "march":
//      console.log(31);
//      break;
//    case "april":
//      console.log(30);
//      break;
//    case "may":
//      console.log(31);
//      break;
//    case "june":
//      console.log(30);
//      break;
//    case "july":
//      console.log(31);
//      break;
//    case "august":
//      console.log(31);
//      break;
//    case "september":
//      console.log(30);
//      break;
//    case "october":
//      console.log(31);
//      break;
//    case "november":
//      console.log(30);
//      break;
//    case "december":
//      console.log(31);
//      break;
//    default:
//      console.log("That’s not a real month");
//      break;
//  }

//3 Pregunte la temperatura exterior al usuario. Si la temperatura:
//debajo 15 grados alerta: “Warm up”.
// entre 15 grados y 25, alerta: “Enjoy the weather!”.
// más de 25 grados, alerta: “Cool down”.

//Sol
// let temperature = prompt("Please provide temperature");
// console.log(typeof temperature);
// switch (true) {
// case temperature < 15:
// alert("Warm up");
//      break;
// case temperature <= 25:
//      alert("Enjoy the weather!");
//      break;
//    case temperature > 25:
//      alert("Cool down");
//      break;

//4 Escribe un programa que simula un semáforo.
//variable “centinela” llamada “isGreen”.
//Si el semáforo está verde: “Cross the road”, en
//caso contrario mostrar: “Please await”

//Sol 1
//let isGreen = true;

// trying the negate operator

//if (!isGreen) {

// console.log("Please await");

//} else {

//  console.log("Cross the road");

//}

//Sol 2

//if (isGreen) {
//console.log("Cross the road");
//}
//else {
//  console.log("Please await");
//}
//Sol 3
//let actualDate = new Date();
//let currentTime = actualDate.getMinutes();
//console.log(currentTime);
//Checks if the minutes of the current time are odd or even.
//If even, the lights are green, and if odd, the lights are red

//let isGreen = currentTime % 2 == 0;
//switch (isGreen) {
//  case true:
//    console.log("Cross the road");
//    break;
//  case false:
//    console.log("Please await");
//    break;
//  default:
//    console.log("Watch out! The traffic lights are broken!");
//    break;
//}
//5 Usando "switch":
//Convertir a Fahrenheit teniendo en cuenta las siguientes temperaturas:
// Absolute Zero → -273.15°C
// Freezing point → 0°C
// Body Temperature → 37°C
// Boiling point → 100°C

////Sol 1
//let temperature = "Freezing Point";
//switch (temperature) {
//  case "Absolute Zero":
//    console.log((-273.15 * 9) / 5 + 32);
//    break;
//  case "Freezing Point":
//    console.log((0 * 9) / 5 + 32);
//    break;
//  case "Body Temperature":
//    console.log((37 * 9) / 5 + 32);
//    break;
//  case "Boiling Point ":
//    console.log((100 * 9) / 5 + 32);
//    break;
//  default:
//    console.log("There are more grades in my beer!");
//    break;
//}

//Sol 2 - Best Solution -
//// Erika solution
//const CELSIUS = prompt("Write temperature in grades centigrades");
//let celsius = parseFloat(prompt("Convert to fahrenheit"));
//const FAHRENHEIT = (CELSIUS * 9) / 5 + 32;
//console.log(
//  `${CELSIUS} degree celsius is equal to ${FAHRENHEIT} degree fahrenheit.`
//);

//6 Solicita al usuario email y contraseña, comparando con lo siguiente guardado en variable:
//• email: tolkien@lordofrings.com
//• password: aNBR6ZeWPY
// Datos correctos: alerta “Welcome Mr. Tolkien”
//Datos incorrectos:“Wrong password or email”.

//Sol 1
//let email = "tolkien@lordofrings.com";
//let password = "aNBR6ZeWPY";
//let userEmail = prompt("Please, enter your email");
//let userPassword = prompt("Please, enter your password");
//if (email == userEmail && password == userPassword) {
//  alert("Welcome Mr. Tolkien");
//} else {
//  alert("Wrong password or email");
//}

////Sol 2
//let email = prompt("Please, enter your email");
//let password = prompt("Please, enter your password");
// if (email == "" && password == "aNBR6ZeWPY") {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

//Sol 3

//let email = prompt("Email");
//let password = prompt("password");
//if (email != "tolkien@lordofrings.com" || password != "aNBR6ZeWPY") {
//  console.log("wrong email or password");
//} else {
//  console.log("Welcome Mr. Tolkien");
//}

//
//7  Ejercicio
// Estuctura switch:
//Convertir euros a:
//Dólar americano
//Yen Japonés
//Libra esterlina
//• Franco suizo
//Mostrando lo siguiente: XXX euros equivalen a YYY dólares americanos, ZZZ
//yen japoneses, NNN libras esterlinas y MMM francos suizos.
//Usar template literal para mostrar el resultado.
//** Buscar el valor al cambio en Google**

// Sol 1

// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

////Sol  2
////let money = prompt ("Enter your amount").trim();
////money= parseInt (money);
//let amount = 100;
//let divisa = "dollar"
//switch (divisa) {
//  case "dollar":
//    console.log(amount*0.97)
//    break;
//    case "yen":
//    console.log(amount*141.29)
//    break;
//    case "libra":
//    console.log((amount*0.88).toFixed (2)) //esto para decimales
//    break;
//    case "swiss franc":
//    console.log(amount*0.97)
//    break;
//    
//}
//
//
////8. Operaciones.Calculadora: Requerir 2 números y la operación a realizar (suma, resta, multiplica o divide).
//Mostrar resultado.

// Sol 1
//let num1 = parseFloat(prompt("Please enter the first number:"));
//let num2 = parseFloat(prompt("Please enter the second number:"));
//let operation = prompt(
//  "Please choose one option: add, subtract, multiply, divide"
//);
//switch (operation) {
//  case "add":
//    console.log(num1 + num2);
//    break;
//  case "subtract":
//    console.log(num1 - num2);
//    break;
//  case "multiply":
//    console.log(num1 * num2);
//    break;
//  case "divide":
//    console.log(num1 / num2);
//    break;
//  default:
//    console.log("Please choose a valid option.");
//    break;
//}
// Sol 2
//let x = prompt("Proporcione número 1");
//let y = prompt("Proporcine número 2");
//let calculo = prompt(
//  "Indicar operación (suma, resta, multiplicacion o division)"
//);
//if (calculo == "suma") {
//  console.log(parseFloat(x) + parseFloat(y));
//} else if (calculo == "resta") {
//  console.log(parseFloat(x) - parseFloat(y));
//} else if (calculo == "multiplicacion") {
//  console.log(parseFloat(x) * parseFloat(y));
//} else if (calculo == "division") {
//  console.log(parseFloat(x) / parseFloat(y));
//} else {
//  console.log(
//    "Calculando con JavaScript"
//  );
//}

//9. Pedir DNI o NIE y comprobar con funciones strings la validez de los datos.
//Datos:
//NIE: con la X o T inicial, todos los números y la letra final, sin espacios ni
//guiones. Ejemplo: X1234567F.
//DNI: ocho dígitos y un carácter alfabético de control. Ejemplo: 12345678A.
//** Consultar la tabla ASCII para poder resolver el ejercicio.**

//Sol 1
// let data = prompt("Please enter DNI or NIE:");
// Verify data length
//if (data.length == 9) {
//  checking if data begins by T or X
//if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//  Checking if the last char is a letter too
// if (
//data.charCodeAt(data.length - 1) >= 65 &&
//  data.charCodeAt(data.length - 1) <= 90

//      65 <=
//      data.charCodeAt(data.length - 1) <=
//      90
//    ) {
//      // Checking if the other part of the string is fullfilled by numbers
//      if (
//        data.charCodeAt(1) >= 48 &&
//        data.charCodeAt(1) <= 57 &&
//        data.charCodeAt(2) >= 48 &&
//        data.charCodeAt(2) <= 57 &&
//        data.charCodeAt(3) >= 48 &&
//        data.charCodeAt(3) <= 57 &&
//        data.charCodeAt(4) >= 48 &&
//        data.charCodeAt(4) <= 57 &&
//        data.charCodeAt(5) >= 48 &&
//        data.charCodeAt(5) <= 57 &&
//        data.charCodeAt(6) >= 48 &&
//        data.charCodeAt(6) <= 57 &&
//        data.charCodeAt(7) >= 48 &&
//        data.charCodeAt(7) <= 57
//      ) {
//        console.log("valid NIE");
//      } else {
//        console.log("Please, check your NIE");
//      }
//    }
//    // if NIE fails, then check the DNI
//  } else if (
//    data.charCodeAt(0) >= 48 &&
//    data.charCodeAt(0) <= 57 &&
//    data.charCodeAt(1) >= 48 &&
//    data.charCodeAt(1) <= 57 &&
//    data.charCodeAt(2) >= 48 &&
//    data.charCodeAt(2) <= 57 &&
//    data.charCodeAt(3) >= 48 &&
//    data.charCodeAt(3) <= 57 &&
//    data.charCodeAt(4) >= 48 &&
//    data.charCodeAt(4) <= 57 &&
//    data.charCodeAt(5) >= 48 &&
//    data.charCodeAt(5) <= 57 &&
//    data.charCodeAt(6) >= 48 &&
//    data.charCodeAt(6) <= 57 &&
//    data.charCodeAt(data.length - 1) >= 65 &&
//    data.charCodeAt(data.length - 1) <= 90
//  ) {
//    console.log("valid DNI");
//  } else {
//    console.log("Please, check your DNI");
//  }
//} else {
//  console.log("Please enter valid data");
//}

// // Sol 2
// let userNieDni = prompt("Please, write your DNI or NIE");
// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   // if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI or NIE is not valid");
//   }
// } else {
//   console.log("Your DNI or NIE is not valid");
// }

// Sol 3
//Comprobador de DNI
// let identificacion = prompt(
//   "¿Se va a registrar con el DNI o con el NIE?"
// ).toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//     alert("Incorrect option");
// }

// 10. Con el objeto Math genera 2 números aleatorios, entre 1 y 6, para simular un juego de dados.
//Comprueba los resultados obtenidos y muestra por consola el ganador. Por ejemplo: “Player 1
//wins!”, o “draw”, en caso de empate.

//let max = 6;
//let min = 1;
//let randomNumber1 = Math.floor(Math.random() * max) + min;
//let randomNumber2 = Math.floor(Math.random() * max) + min;
//console.log(randomNumber1);
//console.log(randomNumber2);
//if (randomNumber1 > randomNumber2) {
//  console.log("Player 1 wins!");
//} else if (randomNumber1 < randomNumber2) {
//  console.log("Player 2 wins!");
//} else {
//  console.log("Draw");
//}
//
