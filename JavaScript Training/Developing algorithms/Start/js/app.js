// // //Determinar tipo de dato y valor de la variable
// // //Caso a
// // let variable = 883 < 542;
// // console.log("a) tipo:", typeof variable, " valor: ", variable);
// // //Caso b
// // variable = 17 / 5;
// // console.log("b) tipo:", typeof variable, " valor: ", variable);
// // //Caso c
// // variable = 12 * 6;
// // console.log("c) tipo:", typeof variable, " valor: ", variable);
// // //Caso d
// // variable = 35 % 8;
// // console.log("d) tipo:", typeof variable, " valor: ", variable);
// // //Caso e
// // variable = 1 == 3 || 5 > 7 || 10 * 5 > 40;
// // console.log("e) tipo:", typeof variable, " valor: ", variable);
// // //Caso f
// // variable = 13 % 2 == 0 ;
// // console.log("f) tipo:", typeof variable, " valor: ", variable);
// // //Caso g
// // variable = "CODE" + " " + "SPACE" ;
// // console.log("g) tipo:", typeof variable, " valor: ", variable);
// // //Caso h
// // variable = (21 / 2) % 3 ;
// // console.log("h) tipo:", typeof variable, " valor: ", variable);
// // //Caso i
// // variable = 5 == "5" ;
// // console.log("i) tipo:", typeof variable, " valor: ", variable);
// // //Caso j
// // variable = !(1 == 1);
// // // console.log("j) tipo:", typeof variable, " valor: ", variable);

// // let totalBet = prompt("Please enter your bet");
// // if (totalBet == 5000) {
// //   alert("All in!");
// // } else if (totalBet < 5000) {
// //   alert("Passing this round.");
// // } else {
// //   alert("wrong bet, try again");
// //   totalBet = prompt("please enter your bet");
// // }

// // let n = prompt("Enter your metal")
// // if (n == 1) {
// //   console.log("winner!");
// // } else if (n == 2) {
// //   console.log("Silver medal");
// // } else if (n == 3) {
// //   console.log("Bronce");
// // } else {
// //   console.log("Try it again");
// // }
// /*Obtener la fecha completa del sistema para el dia en curso*/
// // const fechaDeHoy = new Date();
// //el año con cuatro dígitos
// // let year = fechaDeHoy.getFullYear();
// // El mes de 0 a 11 (0 - Enero y 11 - Diciembre)
// // let month = fechaDeHoy.getMonth();
// //El día del mes en curso ( entre 1 y 31)
// // let today = fechaDeHoy.getDate();
// // el dia de la semana ( 0 para el domingo, 6 para el sábado)
// // let dayOffWeek = fechaDeHoy.getDay();
// // la hora entre 0 y 23
// // let hour = fechaDeHoy.getHours();
// //Los minutos, entre 0 y 23
// // let minutes = fechaDeHoy.getMinutes();
// //Mostrar por la consola la hora y los minutos
// // console.log(hour, " : ", minutes);
// // let day = today;
// //Si el dia tiene menos de dos digitos añade un cero delante
// // if (day < 10) {
// //   day = "0" + day;

// // }
// // console.log(day);
// // le sumamos uno al mes para que coincida con nuestro sistema de meses 1-12
// // month = month + 1;
// // if (month < 10) {
// //   day = "0" + month;
// //  ;
// // }
// // console.log(month);
// // console.log(year);
// // concatenando cademas de caracteres con las variables para la fecha completa
// // let fullDate = hour+":"+minutes+" "+day+"/"+month+"/" +year;
// // console.log ("Today's date and time");
// // console.log (fullDate);

// // function obtenerEstacion() {
// //     const mesActual = new Date().getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11

// //     if (mesActual >= 3 && mesActual <= 5) {
// //         return "Primavera";
// //     } else if (mesActual >= 6 && mesActual <= 8) {
// //         return "Verano";
// //     } else if (mesActual >= 9 && mesActual <= 11) {
// //         return "Otoño";
// //     } else {
// //         return "Invierno";
// //     }
// // }

// // console.log("La estación del año es:", obtenerEstacion());

// //Segunda opcion:

// // if (month == 3 || month == 4 || month == 5){
// //     alert("Spring");
// // }
// // else if (month == 6 || month == 7 || month == 8){
// //     alert("Summer");}
// // else if (month == 9 || month == 10 || month == 11){
// //     alert("Autuum");}
// // else {
// //     alert ("winter");
// //     }

// // Solucion 3

// // if (month >= 12 && month < 3) {
// //   console.log("Winter");
// // }
// // if (month >= 3 && month < 6) {
// //   console.log("Spring");
// // }
// // if (month >= 6 && month < 9) {
// //   console.log("Summer");
// // } else {
// //   console.log("Autumn");
// // }

// // // Estructuras Switch

// // let character = "Black Widow";
// // switch (character) {
// //   case "Captain America":
// //     translate = "Indestructible shield";
// //     break;
// //   case "Black Widow":
// //     translate = "Master spy & assassin";
// //     break;
// //   case "Iron Man":
// //     translate = "Genius-level intellect";
// //     break;
// //   case "Thor":
// //     translate = "The hammer of Thor";
// //     break;
// //   default:
// //     console.log("Choose your hero!");
// //     break;
// // }
// // console.log(translate);

// //
// // let language = prompt("Choose a language: en | de | pt | po");
// // let translate;
// //switch (language) {
// //   case "en":
// //     translate = "Language is English,execute code for English.";
// //     break;
// //   case "de":
// //     translate = "Language is Dutch,execute code for Dutch.";
// //     break;
// //   case "pt":
// //     translate = "Language is Portuguese,execute code for Portuguese.";
// //     break;
// //   case "po":
// //     translate = "Language is Polish,execute code for Polish.";
// //     break;
// //   default:
// //     translate = "Language not chosen, using Spanish";
// // }
// // console.log(translate);

// // const numero = 16;

// // if (numero < 0) {
// //     console.log("El número es menor que 0.");
// // } else if (numero >= 0 && numero <= 10) {
// //     console.log("El número está entre 0 y 10.");
// // } else if (numero >= 11 && numero <= 20) {
// //     console.log("El número está entre 11 y 20.");
// // } else {
// //     console.log("El número es mayor que 20.");
// // }

// // let number = 23;
// // switch (true) {
// //   case number < 0:
// //     console.log("The number is < 0");
// //     break;
// //   case number >= 0 && number <= 10:
// //     console.log("The number is >=0 and <= 10");
// //     break;
// //   case number > 10 && number <= 20:
// //     console.log("The number > 10 and <= 20");
// //   case number > 20:
// //     console.log("The number is > 20");
// //     break;
// //   default:
// //     console.log("Invalid. Please provide a number");
// //     break;
// //}

// ///Comprobar si es un valor numerico
// ////case is NaN (number):
// ///console.log("Wrong type, please add a real or natural number");

// //counting one by one
// //  let count= 0;
// //  while (count < 10){
// //     console.log(count);
// //      count++;
// // }

// // // counting 2 by 2
//  let number = 0;
// while (number < 10) {
// console.log(number);
// number += 2;
//  }

// console.log("-------------");

// //counting 5 by 5

// number= 0;
// while (number <=100){
//     console.log(number);
//     number += 5;
// }

// console.log("-------------");

// //count down

// while (number >= 0){
//     console.log(number);
//     number -= 5;
// }

// console.log("-------------");

//counting multiplication

// number= 2;
// while (number <= 256){
//     console.log(number);
//     number *= 2;
// }

// interactive countdown

// let counter = 10;
// let timer= setInterval(() => {
//     console.log(counter);
//     counter--;
//     if (counter ==0) {
//         clearInterval (timer);
//     }
// }, 1000);

//BUCLE FOR

// let limit = 10;
// for (let counter= 0;counter<= limit;counter++){
// console.log(counter);
// }
// let number = 10;
// while (number > 0) {
//     number -- ;
//     console.log(number);
// }
//Tablas de multiplicar

// for (let number = 1; number <= 10; number++) {
//     console.log("Tabla del : ", number);
//     console.log('-----------------------')

//     let multi = 1;
// while (multi <= 10){
//     console.log (number, " x " , multi, "= ", number*multi);
// multi ++; //Aqui añado esto para evitar el blucle infinito
// }

// console.log('---------------');
// }

// //Contador

//  let counter= 1
//  for (; counter<=10;)
//  {
// console.log(++counter);

//  }

// let i,
// j,
// sum = 0;
// for (i = 0, j = 10; i < 10; i++, j--) {
// sum += i * j;
// console.log(sum);
// }

// for (
//     let counter= 0, limit = 100;
//     counter <= limit;
//     counter++, limit --
// ){
//     console.log(counter,' - ', limit);

// }

// //About break
// let counter = 1;
// while ( counter <= 10){
//     console.log(counter++);
//     if(counter == 6)
//     {
//         break;
//     }

// }
// About continue

// let counter = 1;
// while (counter++ <= 100) {
//   if (counter % 2 != 0) {
//     continue;
//   }
//   console.log(counter);
// }

// // Improving Code
// let totalBet= 0;
// do {
// let totalBet = prompt("Please enter your bet");
// if (totalBet == 5000) {
// alert("All in!");
// } else if (totalBet < 5000) {
// alert("Passing this round.");
// }
// if (totalBet > 5000){
//     alert("Bet limit 5000, please change your bet.")
// }
// if (isNaN(totalBet)){
//     alert("Please, enter a numeric value")
// }
// } while (totalBet>5000 || isNaN(totalBet));

//Bucle Do/While
////// interactive menu for hex colors
//let option = null;
//let colors = ["red", "green", "blue"];
//do {
//  console.log("Please, choose a color");
//  for (let index = 0; index < colors.length; index++) {
//    console.log(index + 1 + "." + colors[index]);
//  }
//  console.log("Press 0 to leave");
//  option = prompt("make your choice");
//  switch (option) {
//    case "1":
//      console.log("Hex code for red: #FF0000");
//      break;
//    case "2":
//      console.log("Hex code for green: #008000");
//      break;
//    case "3":
//      console.log("Hex code for blue: #0000FF");
//      break;
//    default:
//      if (option != 0) {
//        console.warn("Not a valid option, please try again.");
//      } else {
//        console.log("Exiting, see you soon!");
//      }
//  }
//} while (option != 0 && option != null);

//Objetos y Arrays
//
//let star = {
//    name: "Polaris",
//    constellation: "Ursa Minor",
//    Type: "Double/ChannelSplitterNode",
//    sprectralClass: "F7",
//    mag: 2.0,
//    "": "acceptable",
//    mag: 2.5,
//}
//console.log(star.name);
//star.constellation= "Ursa Major"
//console.log(star.constellation);
//
//let num1= 4
//let num2= num1;
//console.log(num2);
//num2 = 7
//console.log(num1);
//console.log(num2);
//
//let star2 = star;
//star2.name = "Mizard";
//star2.mag = 5.7
//console.log(star.name);
//console.log(star2.name);
//console.log(star.mag);
//console.log(star [""]);
//

//let hero = {
//  character: "Iron Man",
//  name: "Tony Stark",
//  powers: [
//    "Genius-lever Intellect",
//    "Multiple powered armor suits",
//    "Ability to fly",
//  ],
//  info: {
//    yearCreated: 1963,
//    powerOrigin: "From his suits",
//    weapons: ["repoulsor rays", "uni - beam projector", "lasers"],
//    didYouKnow:
//      "Toni Stark created and build one of the Spider-Manś upgraded suits known as the Irson Spider Suit.We got a small glimpse of it in Spider-Man: Homecoming!",
//  },
//};
//
//let hero2 = new Object()
//hero2.character = "Hulk";
//hero2.name = "Bruce Banner";
//hero2.powers = [
//    "strength",
//    "speed",
//    "stamina",
//    "durability",
//    "regeneration",
//    "might invulnerability",
//    "breathing underwater",
//];
//console.log(Object(hero2))
//console.log(Object(hero))

//let ShoppingCart = {
//  product1: {
//    id: 0,
//  name: "Nike Air Zoom Pegasus 38",
//  price: "50",
//  quantity: "20 uds",
//},
//product2: {
//    id: 1,
//  name: "Nike Zoom" ,
//  price: "75",
//  quantity: "10 uds",
//
//},
//product3: {
//    id: 2,
//  name: "Adidas Max",
//  price: "30",
//  quantity: "75 uds",
//},
//
//product4: {
//    id: 3,
//  name: "Air Jordan",
//  price: "200",
//  quantity: "7 uds",
//  },
//}
//// 1 option //  console.log(ShoppingCart[Object.key(ShoppingCart)[0]]);
//
////another option
//for(let i=0; i<Object.keys (ShoppingCart).length; i++)
//  {
//    console.log("ID: "+
//ShoppingCart [Object.keys (ShoppingCart)[i]].id
// + " , name: " +
//ShoppingCart [Object.keys (ShoppingCart)[i]].name);
//  }
//

//Arrays

//let team = [
//    "Dani", "Alice","Ana", "Armiche"];

//console.log(team[team.length-1]);
//console.log(team[0]);

//Intro testing
//let fails = false;
//let min= 1;
//let max = 6;
//let player1 = Math.floor (Math.random() * (max -min +1)) + min;
//let player2 = Math.floor (Math.random() * (max -min +1)) + min;
//
//for (let index = 0; index < 10000; index++) {
//    player1 = Math.floor (Math.random() * (max -min +1)) + min;
//    if (player1 < 1 || player1> 6){
//        fails = true;
//
//    }
//}
//    if (fails) {
//        console.error('test fail');
//
//
//    } else {
//        console.log('%c test pass', "color: ·008000")
//
//
//    }
//    console.log(player1);
//

//// Array literal
//let empty = []; // An array with no elements
//let colors = ["red", "blue", "green"]; // Creates an array with three strings
//let numbers = [1, 357, 5.25, -79]; // An array with 4 numeric elements
////let combinedElements = [ 1.1, true, "Hello", ]; // Mixed array
////
////
////let team = ["Dani", "Alice","Ana", "Armiche"];
//let team2 = [...team];
//let team6= Array.from(team);
//team6[0]= "Alice"
//team2[0]= "Coral"
//console.log(team[0]);
//console.log(team2[0]);
//team = ["Dani Vallejo",...team]
//console.log(team);
//
////3 formas de lo mismo:
//let team5 = ["Dani", "Alice","Ana", "Armiche", "Benjamin"];
//let team3= new Array ("David Calero", "David Miro", "Elena",)
//let team4 = Array.of ("David Calero", "David Miró", "Elena",)
////// Spread operator
////let original = [1, 2, 3];
////let originalIncreased = [0, ...original, 4]; // original == [0, 1, 2, 3, 4]
////let copy = [...original]; // Modifying the copy doesn't change the original
//let hexValues = [..."0123456789ABCDEF"]; // (16) ['0', '1', '2', '3', '4', '5', '6', '7', '8',
//'9', 'A', 'B', 'C', 'D', 'E', 'F'
//

// The Array() Constructor
//let elements = new Array(-53, 3.1415, true, "awesome arrays");
//// Array.of()
//let empty = Array.of(); // => []; empty array
//let single = Array.of(10); // => [10]; array with a single element
//let combined = Array.of(1, true, 3); // => [1, true, 3]
// Array.from()
// Convert an iterable or array to a new array
//let copy = Array.from(original); // Another way to copy an array

//// Managing arrays//

//let colors = ["red", "blue", "green"]; // define// an array of strings
//alert(colors[0]); // display the first item//
//colors[2] = "black"; // change the third item//
//colors[3] = "brown"; // add a fourth item//
//alert(colors.length); // 4//
//colors[colors.length] = "black"; // add a color// //(position 4)
//colors[colors.length] = "white"; // add another// //color (position 5)
//// There are several methods to check an array//
////let checking = ["foo", "bar", "baz", "qux"];//
//console.log(Array.from(checking.keys())); // //[0, 1, 2, 3]
//console.log(Array.from(checking.values())); // ["foo", "bar", "baz", "qux"]
//console.log(Array.from(checking.entries())); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]

//Creando Arrays

// The Array() Constructor
//let elements = new Array(-53, 3.1415, true, "awesome arrays");
// Array.of()
//let empty = Array.of(); // => []; empty array
//let single = Array.of(10); // => [10]; array with a single element
//let combined = Array.of(1, true, 3); // => [1, true, 3]
// Array.from()
// Convert an iterable or array to a new array
//let copy = Array.from(original); // Another way to copy an array

//Acceder a elementos de Array

// Stack Methods - last-in-first-out (LIFO)
//let numbers = [1, 2, 3];
//numbers.push(5); // adds an element at the end [1, 2, 3, 5]
//numbers.pop(); // deletes last element [1, 2, 3]
//numbers.push(4); // adds an element at the end [1, 2, 3, 4]
// Queue Methods - first-in-first-out (FIFO)
//let colors = ["red", "green", "blue"];
//colors.shift(); // (2) ['green', 'blue']
//colors.unshift("orange"); // (3) ['orange', 'green', 'blue'

// Encontrar elementos

//let mixed = [1, true, 3, NaN, 1];
//mixed.includes(2); // => false
//mixed.includes(true); // => true
//mixed.includes(NaN); // => true
//mixed.indexOf(NaN); // => -1; indexOf can't find NaN
//mixed.indexOf(3); // => 2
//mixed.lastIndexOf(1); // => 4

//const evens = [2, 4, 6];
//console.log(evens.findIndex(x => x === 6)) // => 2; index of 6 in the array
//console.log(evens.findIndex(x => x < 0)) // => -1; no negative numbers in the array
//console.log(evens.find(x => x % 3 === 0)) // => 6: this is a multiple of 3
//console.log(evens.find(x => x % 7 === 0)) // => undefined: no multiples of 7 in the array
//

//Ordenar Arrays

//let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//alert(numbers); // 5,4,3,2,1
//let moreNumbers = [0, 1, 5, 10, 15];
// sort() with no arguments sorts the array in

//Alfabéticamente
//moreNumbers.sort();
//alert(moreNumbers); // 0,1,10,15,5

// Declaring a comparison function
//
//function compare(value1, value2) {
//if (value1 < value2) {
//return -1;
//} else if (value1 > value2) {
//return 1;
//} else {
//return 0;
//}
//}
//
//let unorderedNumbers = [20, -8 , 3, 102,43,18]
//unorderedNumbers.sort (compare)
//console.log(unorderedNumbers);
////moreNumbers.sort(compare);
////alert(moreNumbers); // 0,1,5,10,15

////Orden alfabético
//let team= [
//    "Alice",
//    "Sebastian",
//    "Ismael",
//    "Juan",
//    "David Miró",
//    "David Calero",
//];
//team.sort()
//console.log(team);

//let unorderedNumbers = [20, -8 , 3,3, 102,43,18]
//let counter = 0;
//unorderedNumbers.sort(function(value1,value2){
//    counter++;
//console.log("value1: ",value1);
//console.log("value2: ",value2);
//console.log("result: ",value1 - value2);

//        return value1 - value2;
//    });
//    //console.log(counter);
//    //console.log(unorderedNumbers);
//    unorderedNumbers.sort(
//        (value1,value2) => value2 - value1
//    );
//    console.log(unorderedNumbers);

//Manera tradicional de ordernar Arrays

//let numbers = [3, 9, 8, 1, 4];
//for (let i = 0; i < numbers.length - 2; i++) {
//console.log(numbers);
//for (let j = 0, aux = 0; j < numbers.length - 1; j++) {
//if (numbers[j] > numbers[j + 1]) {
//aux = numbers[j];
//numbers[j] = numbers[j + 1];
//numbers[j + 1] = aux;
//}
//}
//}
//console.log(numbers);

// Iterating arrays
// The for/of loop works with iterable
//0objects (arrays, strings,...)
//let numbers = [1, 4, 6, 8],
//sum = 0;
//for (let num of numbers) {
//sum += num;
//}
//console.log(sum); // => 19

//Iteratin Objects

//let shoppingCart = {
//    product1: {
//        id: 0,
//        name: "trainers",
//        price: 29.95,
//        quantity: 1
//    },
//    product2: {
//        id: 1,
//        name: "suitcase",
//        price: 109.95,
//        quantity: 1
//    },
//    product3: {
//        id: 2,
//        name: "glovers",
//        price: 9.95,
//        quantity: 1
//    },
//    product4: {
//        id: 3,
//        name: "t-shirt",
//        price: 19.95,
//        quantity: 2
//    }
//}
//for (let key in shoppingCart )
//{
//    console.log(shoppingCart[key].id);
//    console.log(shoppingCart[key].name)
//
//}

//another example

//let hero = {
//    character: "Iron Man",
//    name: "Tony Stark"
//    }
//for (const keys in hero) {
//  console.log(`${keys} => ${hero [keys]}`);
//    }

//Usos de "foreach"
//["Aragorn", "Gandalf","Nazgul"].forEach((element,index,array) => {
//    console.log(`${element} is at index ${index} in ${array}`);
//});
//[..."Soberano de Angmar en tiempos pasados"]. //aqui usamos el propagador
//forEach(letter => {console.log(letter);
//})
//

//let numbers = [1,2,3];
//let mappedNumbers = numbers.map(
//    number => number*2
//)
//console.log(mappedNumbers);
//
//let filteredNumbers = numbers.filter (number => number < 3)
//console.log(filteredNumbers);
//
//console.log(
//    numbers.every(number => number > 2)
//);
//console.log(
//    numbers.some (number => number > 2)
//);
//
//let totalSum = numbers.reduce((accum,number)=> accum + number,0)
//console.log(totalSum);
//totalSum = 0;
//
//totalSum = numbers.reduceRight((accum,number)=> accum+number,0)
//console.log(totalSum);

//let calendar = new Array(5)
//for (let i = 0; i < calendar.length; i++) {
//   calendar[i] = new Array(7)
//}
//
//1,2,3
//4,5,6
//
//for (let row = 0, day = 1; row < calendar.length; row++) {
//
//for (let col = 0; col < calendar[row],length; col++)
// {
//  if (day < 31) {
//calendar [row][col] = day++;
//  }  else if (day == 31){
//    calendar [row][col] =day;
//    day = 1;
//  }
//}

//}
//console.log(calendar);

//Definiendo funciones

//function sayHello(moment, name){
//    console.log(`Good ${moment}, ${name}!`);
//    return name.length;
//
//}
//let letters = 0;
//letters= sayHello ("Morning","Patricia");
//console.log(`Your name has ${letters} letters`);
//letters= sayHello ("Afternoon","Patricia");
//console.log(`Your name has ${letters} letters`);
//letters= sayHello ("Night", "Patricia");
//console.log(`Your name has ${letters} letters`);

//const sum = function (num1,num2){
//    return num1 + num2;
//}
//console.log(sum (2,2));
//console.log(sum (1,3));
//console.log(sum (0,4));

//const sum = function (num1,num2){
//    return num1 + num2;
//}
//const sum2 = (num1,num2) => num1+num2;
//
//
//console.log(sum (2,2));
//console.log(sum (1,3));
//console.log(sum (11,11));
//

//console.log('Working!');
//
//const sayHello = (name,today) => {
//    console.log(`Hello ${name} today is ${today}`);
//    return true;
//};
//let value = sayHello ("John","Monday");
//if (value){
//    console.log("Returning values");

//let heroName = "Tony Stark";
//let hero = {
//  heroName,
//  powers: {
//    powers: [
//      "Flight",
//      "Artificial Intelligence",
//      "Armored suit",
//      "Super strenght + Durability",
//    ],
//  },
//};
//hero.character = "Iron Man"
//console.log(hero, heroName);
//console.log(hero.powers.powers[2]);
//console.log(hero.character);
//
////Computed property keys
//
//let powers = [
//    "Master of the Mystics Arts",
//    "Astral Projection",
//    "Teleportation",
//    "Eye of Agamotto",
//    "Cloack of Levitation",
//    ];
// let drStrange = {
//    name: "Stephen Strange",
// };
// powers.forEach((element,index) => {
//    drStrange [`power${index}`] = element; //propiedades dinamicas
// });
// for (const key in drStrange){
//    console.log(`${key}: ${drStrange[key]}`);
//
// }

//clases

//class Villains{}
////propiedad dinamica
//class Avengers{
//    constructor(character,name){ //metodo constructor
//this.character = character; //con el this.distingue una clase de una propiedad
//this.name = name;
//this.powers = [];
//this.bio = "";
//    }
//    set power(newPower){
//        this.powers.push(newPower);
//    }
//    get power(){
//        console.log(this.powers.join(","));
//
//    }
//}
//let ironMan = new Avengers("Iron Man", "Tony Stark");
//ironMan.power = "Flight";
//ironMan.power= "Artificial Intelligence";
//ironMan.power= "Armored suit";
//
//ironMan.power

//class Date{
//    constructor(){
//        //this.date =
//    }
//}
//new Date()

//static AvengersBio = () => {
//    this.bio = `Earth's Mightiest Heroes
//    stand as the planet's first line of
//    defense against the most powerful
//    threats in the universe.`
//    console.log(this.bio);
//    }
//
//    ironMan = new Avengers(
//    "Iron Man",
//    "Toy Stark",
//    )
//
//    ironMan.power = "Flight"
//ironMan.power = "Artificial Intelligence"
//ironMan.power = "Armored Suit"
//ironMan.power = "Super Strength + Durability"
//ironMan.power
//// ironMan.AvengersBio()
/* Uncaught TypeError: 
ironMan.AvengersBio is not a function
*/
//Avengers.AvengersBio()

//Crea una clase llamada User que define un constructor, que recibe 1 parametro, dni
//A continuacion añade los setters y getters para el nombre y el email.
//Crea un objeto, dale un nombre y un email y muestralos por consola.
//
//// Definición de la clase User
//class User {
//constructor(dni) {
//    this._dni = dni;
//    this._name = "";
//    this._email = "";
//  }
//
//  // Setter para el nombre
//  set name(name) {
//    this._name = name;
//  }
//
//  // Getter para el nombre
//  get name() {
//    return this._name;
//  }
//
//  // Setter para el email
//  set email(email) {
//    this._email = email;
//  }
//
//  // Getter para el email
//  get email() {
//    return this._email;
//  }
//  // Setter para el DNI
//  set dni(dni) {
//    this._dni = dni;
//  }
//
//  // Getter para el DNI
//  get dni() {
//    return this.dni;
//  }
//}

// Crear un objeto de la clase User
//const user = new User("12345678A");
//Otra opcion //
//let user = new User("12345678A");
////// Asignar un nombre, email y DNI al usuario
//user.name = "Patricia";
//user.email = "Patricia@example.com";
//user.dni = "987645321A";
//
////// Mostrar el nombre y el email del usuario por consola
//console.log("Nombre:", user.name);
//console.log("Email:", user.email);
//console.log("DNI:", user._dni);
