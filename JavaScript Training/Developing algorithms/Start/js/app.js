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