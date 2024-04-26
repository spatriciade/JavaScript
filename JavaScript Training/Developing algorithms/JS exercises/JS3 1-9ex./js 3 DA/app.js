//Desarrollando algoritmos 3

//1. Ejercicio

//Escribe un programa que pregunte al usuario los límites máximo y mínimo, y genere un array de 20 
//números aleatorios entre esos valores, ambos incluidos. Luego mostrará el valor más alto y el más 
//bajo dentro del array, con el siguiente formato (por consola):
//• min value: nnn
//• max value: mmm

//const exercise1 = () => {
//const numberGenerator = (maxLimit, minLimit) =>  {

//let minLimit = parseInt(prompt("Insert min number: "));
//let maxLimit = parseInt(prompt("Insert max number: "));

//let requiredNumbers = 20;
 //let randomNumbersList = new Array(requiredNumbers);


//numberGenerator();
//const numberGenerator = (maxLimit, minLimit) =>
//   Math.floor(Math.random() * (maxLimit - minLimit + 1)) + minLimit;
//  let minFound = maxLimit;
//  let maxFound = minLimit;
//  for (let i = 0, temp = 0; i < requiredNumbers; i++) {
//    temp = numberGenerator(maxLimit, minLimit);
//    randomNumbersList[i] = temp;
//    if (temp < minFound) {
//      minFound = temp;
//    }
//    if (temp > maxFound) {
//      maxFound = temp;
//    }
//  }
//  console.log(randomNumbersList);
//
//  console.log("Min value: ", minFound);
//  console.log("Max value: ", maxFound);
//};
//exercise1();
//

//2. Ejercicio

//Escribe un programa que recoge la hora del sistema, y al cargar la página pregunta al usuario su 
//nombre. A continuación, muestra un saludo personalizado (alerta) en función de la hora, teniendo 
//en cuenta los siguientes rangos:
//• Entre las 5:00 y las 11:59 → “Good Morning, {userName}!”
//• Entre las 12:00 y las 17:59 → “Good Afternoon, {userName}!”
//• Entre las 18:00 y las 04:59 → “Good Evening, {userName}!”
//Los saludos deberán estar predefinidos en un objeto con el identificador “greeting

//const exercise2 = () => {
// Exercise 2: solution
// let date = new Date();
// let hour = date.getHours();
// let minutes = date.getMinutes();
// //let hour = 5;
// //let minutes = 59;
// console.log(hour,minutes);
// if (hour >= 6 && minutes >= 0 && hour <= 11 && minutes <= 59) {
//   alert("¡Buenos días!");
// } else if (hour >= 12 && minutes >= 0 && hour <= 20 && minutes <= 59) {
//   alert("¡Buenas tardes!");
// } else if ((hour >= 21 && minutes >= 0) || (hour <= 5 && minutes <= 59)) {
//   alert("¡Buenas noches!");
// } else{
//   console.log("system time is failing.");
// }
// 
// exercise2();
//
//Patricia Solution

// Obtener la hora
//const now = new Date();
//const currentHour = now.getHours();

// Preguntar al usuario su nombre
//const userName = prompt("Por favor, ingresa tu nombre:");

// Mostrar el saludo personalizado
//const now = new Date();
//const currentHour = now.getHours();
//const currentMinutes = now.getMinutes();
//
//if (currentHour >= 5 && currentHour < 12) {
//    alert("¡Buenos días, " + userName + "!");
//} else if (currentHour >= 12 && currentHour < 18) {
//    alert("¡Buenas tardes, " + userName + "!");
//} else {
//    alert("¡Buenas noches, " + userName + "!");
//}
//console.log(currentHour,currentMinutes);

//3. Ejercicio
//Escribe un programa que genere 10 códigos hexadecimales aleatorios (no repetidos), y escriba en 
//la consola “Hello World!” del color aleatorio generado

//const exercise3 = () => {
////storing all letter and digit combinations
////for html color code
//const generateColor = () => {
//  let letters = "0123456789ABCDEF";
//  // html color code starts with #
//  let color = "#";
//  // generating 6 times as HTML color code consist
//  // of 6 letter or digits
//  for (let i = 0; i < 6; i++) {
//    color += letters[Math.floor(Math.random() * 16)];
//  }
//  return color;
//};
//for (let i = 1; i <= 10; i++) {
//  console.log("%cHello World!",`color: ${generateColor()}`);
//}
//}
//exercise3();

//4. Ejercicio
//Para verificar el DNI, se divide el número entre 23 y el resto se sustituye por una letra que se 
//determina por la siguiente tabla:

//RESTO 0 1 2 3 4 5 6 7 8 9 10 11
//LETRA T R W A G M Y F P D X B
//RESTO 12 13 14 15 16 17 18 19 20 21 22
//LETRA N J Z S Q V H L C K E


//Escribe un programa que almacena un DNI dado por el usuario, y verifica si es un DNI válido, 
//lanzando una alerta “Valid DNI” o “The data entered is wrong”.
//** Bonus: añade un programa que genera DNI válidos aleatorios. **

//const exercise4 = () => {
//  let validLetters = [
//    "T",
//    "R",
//    "W",
//    "A",
//    "G",
//    "M",
//    "Y",
//    "F",
//    "P",
//    "D",
//    "X",
//    "B",
//    "N",
//    "J",
//    "Z",
//    "S",
//    "Q",
//    "V",
//    "H",
//    "L",
//    "C",
//    "K",
//    "E",
//  ];
//
//  // console.log(validLetters[22]);
//  let dni = prompt("Please, enter your DNI: ");
//  let numbers = dni.substring(0, dni.length - 1);
//  let letter = dni.substring(dni.length - 1);
//  // console.log(letter);
//  if (validLetters[parseInt(numbers) % 23] == letter) {
//    alert("Valid DNI");
//  } else {
//    alert("The data entered is wrong");
//  }
//
//  const dniGenerator = () => {
//    let randomNumber = Math.floor(
//      Math.random() * (100000000 - 10000000) + 10000000
//    );
//    randomNumber += validLetters[randomNumber % 23];
//    return randomNumber;
//  };
//  for (let index = 0; index < 100; index++) {
//    console.log(dniGenerator());
//  }
//};
//exercise4();


//5. Ejercicio

//Escribe un programa que genera matrículas aleatorias, sabiendo que:
//• Una matrícula válida debe estar compuesta por 4 números y 3 letras.
//• Los números pueden ir desde 0000 hasta 9999
//• Las letras pueden ir desde BBB hasta ZZZ
//• No se permiten vocales
//• No se permiten las consonantes Ñ ni Q
//El número de matrículas aleatorias será a petición del usuario.

//const exercise5 = () => {
//  let platesNumber = prompt("Please, insert a number to generate:");
// let plate = "";
 // numbers
// const numbersGenerator = () => {
//   let number = Math.floor(Math.random() * 10000);
//   if (number < 10) {
//     plate = "000" + number;
//   } else if (number < 100) {
//     plate = "00" + number;
//   } else if (number < 1000) {
//     plate = "0" + number;
//   } else {
//     plate = number.toString();
//   }
//  }
 
//}
//exercise5();
//numbersGenerator();

//6 Ejercicio

//Recopila 20 citas aleatorias de una temática a tu elección, y almacénalas en un array. A 
//continuación, investiga las funciones setInterval y setTimeout para generar una cita aleatoria, que 
//se mostrará en consola, cada 10 segundos, durante 2 minutos.

//const exercise6 = () => {
//  let quotes = [
//    "The purpose of our lives is to be happy. — Dalai Lama",
//    "Life is what happens when you’re busy making other plans. — John Lennon",
//    "Get busy living or get busy dying. — Stephen King",
//    "You only live once, but if you do it right, once is enough. — Mae West",
//    "Many of life’s failures are people who did not realize how close they were to success when they gave up.– Thomas A. Edison",
//    "If you want to live a happy life, tie it to a goal, not to people or things.– Albert Einstein",
//    "Never let the fear of striking out keep you from playing the game.– Babe Ruth",
//    "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
//    "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking. – Steve Jobs",
//    "Not how long, but how well you have lived is the main thing. — Seneca",
//    "If life were predictable it would cease to be life, and be without flavor. – Eleanor Roosevelt",
//    "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.– Henry Ford",
//    "In order to write about life first you must live it.– Ernest Hemingway",
//    "The big lesson in life, baby, is never be scared of anyone or anything.– Frank Sinatra",
//    "Sing like no one’s listening, love like you’ve never been hurt, dance like nobody’s watching, and live like it’s heaven on earth. – (Attributed to various sources)",
//    "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. – Leo Burnett",
//    "Life is not a problem to be solved, but a reality to be experienced.– Soren Kierkegaard",
//    "The unexamined life is not worth living. — Socrates",
//    "Turn your wounds into wisdom. — Oprah Winfrey",
//    "The way I see it, if you want the rainbow, you gotta put up with the rain. —Dolly Parton",
//  ];
//
//  console.log(quotes.length);
//  let start = new Date();
//  let end = null;
//  setTimeout(() => {
//    clearInterval(intervalId);
//    end = new Date();
//    console.log(
//      "Operation took " + (end.getTime() - start.getTime()) + " msec"
//    );
//  }, 1000 * 120);
//  let intervalId = setInterval(() => {
//    console.log(quotes[Math.floor(Math.random() * quotes.length)]);
//  }, 10000);
//}
//exercise6();

//Patricia music alternative solution

//const spotyPatri = [
//"https://open.spotify.com/playlist/0QJfLA6qABUQnhatm8YzDu?si=66801bc77d0943d0"
//];
//
//const exercise6 = () => {
//  console.log(spotyPatri.length);
//  let start = new Date();
//  let end = null;
//  setTimeout(() => {
//    clearInterval(intervalId);
//    end = new Date();
//    console.log(
//      "Operation took " + (end.getTime() - start.getTime()) + " msec"
//    );
//  }, 1000 * 120);
//  let intervalId = setInterval(() => {
//    console.log(spotyPatri[Math.floor(Math.random() * spotyPatri.length)]);
//  }, 10000);
//}
//
//exercise6();

//7. Ejercicio

//Escribe un programa que genera 100 números aleatorios, entre 0 y 500, y los almacena en un array. 
//A continuación filtra todos los números impares, ordenando los pares de mayor a menor.

//const exercise7 = () => {
//  let numbers = new Array(100);
//  for (let index = 0; index < numbers.length; index++) {
//    numbers[index] = Math.floor(Math.random() * 501);
//  }
//  numbers = numbers.filter((number) => number % 2 === 0);
//  numbers = numbers.sort((a, b) => b - a);
//  console.log(numbers);
//};
// exercise7();

//8. Ejercicio

//Escribe un programa para jugar a la carta más alta. Para el juego se utilizará la baraja de poker, por 
//lo que:
//• Habrá 2 arrays, uno con los palos (clubs, hearts, spades, diamonds) y otro con las cartas.
//• El array de cartas incluirá las siguientes, cuyo valor está ordenado de mayor a menor: 
//ACE, KING, QUEEN JACK, 10, 9, 8, 7, 6, 5, 4, 3, 2.
//Se juega contra la banca, con un saldo inicial de 500 €. En cada mano se preguntará al usuario 
//cuanto quiere apostar. 
//Si la apuesta del usuario supera su saldo, se le notificará y se le pedirá que apueste de nuevo. Si la 
//apuesta es válida, se generarán 2 cartas aleatorias, se mostrarán por consola, y se indicará una 
//alerta “You win!”, “You lose” o “Draw”, según corresponda.
//Se sumará o restará el saldo en función del resultado. 
//Al final de cada mano se le preguntará si quiere seguir jugando, siendo “y” la opción para seguir, y “n” la 
//opción para retirarse. 
//En caso de perder todo el saldo, la partida finaliza. En caso de retirarse, se calcula si ha habido 
//beneficios o pérdidas, y se indica mediante una alerta: “Betting benefits: XXX €”, mostrando las pérdidas 
//con un número negativo, y las ganacias con un número positivo. A continuación, otra alerta con el saldo 
//total: “Total balance: YYY €

//const exercise8 = () => {
//  let clubs = [
//    "ACE",
//    "KING",
//    "QUEEN",
//    "JACK",
//    "10",
//    "9",
//    "8",
//    "7",
//    "6",
//    "5",
//    "4",
//    "3",
//    "2",
//  ];
//  let suits = ["clubs", "hearts", "spades", "diamonds"];
//  let hearts = [...clubs];
//  let spades = Array.of(...clubs);
//  let diamonds = Array.from(clubs);
//  let balance = 500;
//  let bet = 0;
//  let minimunBet = 5;
//  let continuePlaying = false;
//
//  do {
//    do {
//      bet = parseInt(prompt("How much do you want to bet?"));
//      if (bet > balance) {
//        alert("Sorry, your bet is higher than your available balance.");
//        alert(`Maximum available: ${balance}`);
//      }
//      if (bet < minimunBet) {
//        alert("Sorry, your bet is lower than the minimun required.");
//        alert(`Mininum required: ${minimunBet}`);
//      }
//    } while (bet > balance || bet < minimunBet);
//    let card1 = Math.floor(Math.random() * clubs.length);
//    let card2 = Math.floor(Math.random() * clubs.length);
//    let suit1 = suits[Math.floor(Math.random() * suits.length)];
//    let suit2 = "";
//    do {
//      suit2 = suits[Math.floor(Math.random() * suits.length)];
//    } while (card1 == card2 && suit1 == suit2);
//    console.log(
//      `${eval(suit1)[card1]} ${suit1} vs. ${eval(suit2)[card2]} ${suit2}`
//    );
//    if (card1 < card2) {
//      balance += bet;
//      alert("You win!");
//    } else if (card1 > card2) {
//      balance -= bet;
//      alert("You lose");
//    } else {
//      alert("Draw");
//    }
//    if (balance >= minimunBet) {
//      continuePlaying =
//        prompt("Would like to continue playing").toLowerCase() == "y";
//    }
//  } while (continuePlaying && balance >= minimunBet);
//  alert(`Betting benefits: ${balance - 500} €`);
//  alert(`Total balance: ${balance} €`);
//};
//
//exercise8();

// Patricia Solution

// Función para generar un número aleatorio entre min y max (inclusive)
//function getRandomInt(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//}
//
//// Arrays de palos y cartas
//const suits = ["clubs", "hearts", "spades", "diamonds"];
//const cards = ["ACE", "KING", "QUEEN", "JACK", "10", "9", "8", "7", "6", "5", "4", "3", "2"];
//
//// Saldo inicial
//let balance = 500;
//
//// Función para jugar una mano
//function playHand() {
//  // Preguntar al usuario cuánto quiere apostar
//  let bet = parseInt(prompt("¿Cuánto quieres apostar?"));
//  
//  // Validar la apuesta
//  while (isNaN(bet) || bet <= 0 || bet > balance) {
//    alert("La apuesta no es válida. Por favor, ingresa un número válido.");
//    bet = parseInt(prompt("¿Cuánto quieres apostar?"));
//  }
//  
//  // Generar dos cartas aleatorias para el jugador y la banca
//  const playerCard = cards[getRandomInt(0, cards.length - 1)];
//  const bankCard = cards[getRandomInt(0, cards.length - 1)];
//  
//  // Determinar el resultado
//  let result;
//  if (cards.indexOf(playerCard) > cards.indexOf(bankCard)) {
//    result = "¡Ganaste!";
//    balance += bet;
//  } else if (cards.indexOf(playerCard) < cards.indexOf(bankCard)) {
//    result = "Perdiste";
//    balance -= bet;
//  } else {
//    result = "Empate";
//  }
//  
//  // Mostrar el resultado
//  alert(result);
//}
//
//// Función principal para jugar
//function playGame() {
//  while (balance > 0) {
//    playHand();
//    
//    // Preguntar al usuario si quiere seguir jugando
//    const playAgain = prompt("¿Quieres seguir jugando? (y/n)").toLowerCase();
//    if (playAgain !== 'y') {
//      // Calcular el beneficio o la pérdida
//      const profit = balance - 500;
//      alert("Beneficio o pérdida: " + profit + " €");
//      alert("Saldo total: " + balance + " €");
//      break;
//    }
//  }
//}
//
//// Iniciar el juego
//playGame();

//9. Ejercicio

//El cifrado César es un tipo de cifrado por sustitución en el que una letra en el texto original es 
//reemplazada por otra letra que se encuentra un número fijo de posiciones más adelante en el 
//alfabeto. 
//Por ejemplo, con un desplazamiento de 3, la A sería sustituida por la D (situada 3 lugares a la 
//derecha de la A), la B sería reemplazada por la E, etc. Este método debe su nombre a Julio César, 
//que lo usaba para comunicarse con sus generales.
//Escribe un programa con una función que recibe 2 parámetros, el primero para indicar si hay que 
//cifrar o descifrar, y el segundo bien texto en claro, o bien el texto codificado mediante el cifrado 
//Cesar. El programa mostrará por consola el string resultante, codificado o no, según corresponda

//const exercise9 = (encode, text) => {
//  const cipher = (encode, text) => {
//    if (encode) {
//      // encode
//      text = [...text].map((letter) => {
//        switch (letter.charCodeAt(0)) {
//          // uppers
//          case 88: // x
//            return String.fromCharCode(65);
//          case 89: // y
//            return String.fromCharCode(66);
//          case 90: // z
//            return String.fromCharCode(67);
//          //lowers
//          case 120: // x
//            return String.fromCharCode(97);
//          case 121: // y
//            return String.fromCharCode(98);
//          case 122: // z
//            return String.fromCharCode(99);
//          //whitespace
//          case 32:
//            return String.fromCharCode(32);
//          // the rest of letters
//          default:
//            return String.fromCharCode(letter.charCodeAt(0) + 3);
//        }
//      });
//    } else {
//      // decode
//      text = [...text].map((letter) => {
//        switch (letter.charCodeAt(0)) {
//          // uppers
//          case 65:
//            return String.fromCharCode(88);
//          case 66:
//            return String.fromCharCode(89);
//          case 67:
//            return String.fromCharCode(90);
//          //lowers
//          case 97:
//            return String.fromCharCode(120);
//          case 98:
//            return String.fromCharCode(121);
//          case 99:
//            return String.fromCharCode(122);
//          case 32:
//            return String.fromCharCode(32);
//
//          default:
//            return String.fromCharCode(letter.charCodeAt(0) - 3);
//        }
//      });
//    }
//    console.log(text.join(""));
//  };
//  cipher(encode, text);
//}
//exercise9();

