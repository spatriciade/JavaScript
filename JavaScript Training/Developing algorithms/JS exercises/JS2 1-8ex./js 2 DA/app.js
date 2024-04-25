//Desarrollando algoritmos 2

//1. Ejercicio
//Escribe un programa para contar las letras en la 
//palabra: palindrome, mostrándolas una a una.

//const exercise1 = () => {
   // let text = "palindrome";
   // for (let number = 0; number <= text.length - 1; number++) {
   //     console.log(`${number + 1}. ${text[number]}`);
   // }
   // console.log("Letters quantity: ", text.length);
 //exercise1();  

//2 Ejercicio
//Escribe un programa que muestre las letras del palíndromo “no lemon, no melon
//” en orden inverso.

//const exercise2 = () => {
//    let palindrome = "no lemon, no melon";
//  let invertedPalindrome = "";
//
 //  for (let i = palindrome.length - 1; i >= 0; i--) {
  //      invertedPalindrome += palindrome[i];
  //  }
  //  console.log(invertedPalindrome);
//exercise2();

//3 Ejercicio

//Escribe un programa para mostrar un cuadrado de asteriscos de 4x4.
//****
//****
//****
//****
//const exercise3 = () => {
//let asterisks = "";
//    for (let i = 0; i < 4; i++) {
//        asterisks += "****\n";
//    }
//    console.log(asterisks);
//exercise3();

//4 Ejercicio
//Escribe un programa con 7 variables con la temperatura de los 7 últimos días (Google). A 
//continuación, muestra cuál ha sido la temperatura media.

//const exercise4 = () => {
//let mediaTemp = 0;
//    let counter = 0;
//    for (
//        let i = 18,
//        mar18 = 17,
//        mar19 = 17,
//        mar20 = 16,
//        mar21 = 14,
//        mar22 = 17,
//        mar23 = 15,
//        mar24 = 14;
//        i < 25;
//        i++, counter++
//    ) {
//        mediaTemp += eval(`mar${i}`);
//    }
//    console.log("7-Day Average Temperature: ", mediaTemp / counter);
//}
//exercise4();

//5 Ejercicio
//Escribe una función con el nombre “stringManager”, que recibirá 2 parámetros: un string,
//introducido por el usuario a través del prompt(), y un segundo parámetro, que será un objeto con las 
//funciones a realizar. Genera un Lorem50 desde VS Code para probar el ejercicio.
//El ejercicio comenzará pidiendo un string al usuario, a través de la función prompt(). A continuación, 
//mediante un menú de consola, preguntará al usuario las siguientes opciones:
//• Replace chars by signs?
//• Capitalize?
//• Replace spaces with commas?
//La primera opción reemplazará de la siguiente forma:
//• a → @
//• e → 3
//• i → 1
//• o → 0
//• s → $
//La segunda opción pondrá la primera letra de cada palabra en mayúscula, y la tercera cambiará los
//espacios por comas. No puede haber 2 comas seguidas.
//El menú aceptará únicamente y para sí o n para no. Almacenará las respuestas en un objeto con las 
//propiedades: replaceChars, capitalize y replaceSpaces, cuyos valores asociados serán booleanos.
//La salida del programa deberá mostrar el string original, y a continuación el string con cada una de 
//las modificaciones requeridas. Un ejemplo con todas las opciones marcadas como true:
//• Lorem ipsum dolor sit amet
//• L0r3m 1p$um d0l0r $1t @m3t
//• Lorem Ipsum Dolor Sit Amet
//• Lorem,ipsum,dolor,sit,amet
//** El programa deberá registrar el tiempo de realización, es decir, desde que comienza el proceso de 
//transformación del string hasta que termina. Después de los string requeridos, el programa mostrará 
//las siguientes líneas: **
//• 5 words, 25 chars
//• work done in 750 miliseconds

//const exercise5 = () => {
//    let startTime = 0, endTime = 0, startTime2 = 0, endTime2 = 0, words = 0, chars = 0
//    let response = "";
//    let questions = [
//        "Replace chars by signs?",
//        "Capitalize?",
//        "Replace spaces with commas?"
//    ];
//    let options = {
//        replaceChars: false,
//        capitalize: false,
//        replaceSpaces: false,
//    };
//    let string = "";
//    do {
//        string = prompt('Please, enter your string').trim();
//    } while (!string || string.length == 0);
//    words = string.split(" ").length
//    chars = [...string].length
//    for (let index = 0; index < questions.length; index++) {
//        do {
//            response = prompt(questions[index]).trim()
//            console.log(response);
//            switch (index) {
//                case 0:
//                    options.replaceChars = response == 'y' ?? false;
//                    break;
//                case 1:
//                    options.capitalize = response == 'y' ?? false;
//                    break;
//                case 2:
//                    options.replaceSpaces = response == 'y' ?? false;
//                    break;
//            }
//        } while (!response || response.length == 0 || !(/y|n/i.test(response)));
//
//    }
//    startTime = performance.now()
//    console.time("work done in ")
//    startTime2 = new Date().getTime();
//    stringManager(string, options)
//    endTime = performance.now()
//    console.log(`${words} words, ${chars} chars`);
//    console.timeEnd("work done in ")
//    endTime2 = new Date().getTime();
//    console.log(`with performance: ${endTime - startTime} ms`);
//    console.log(`with Date(): ${endTime2 - startTime2} ms`);
//}
//exercise5();

//6 Ejercicio

//Escribe un programa para generar estadísticas de texto. Recibirá un string proporcionado por el 
//usuario, y a modo de ejemplo, para la entrada: Lorem ipsum dolor sit amet, mostrará la siguiente 
//salida:
//• Length: 26 characters
//• Length witout white-space: 22 charactersWords: 5
//• Unique words: 5
//• Unique words(%): 100%
//• Length of shortest word: 3 characters
//• Length of longest word: 5 characters
//• Avg. word length: 4 (con redondeo al número entero más cercano)


//const exercise6 = () => {
//    let string = "";
//    let words = 0, chars = 0;
//    let stats = {
//        stringLength: 0,
//        cleanStringLenght: 0,
//        words: 0,
//        uniqueWords: 0,
//        uniqueWordsPercentage: 0,
//        minWordLenght: 0,
//        maxWordLenght: 0,
//        averageWordLenght: 0,
//    }
//    do {
//        string = prompt('Please, enter your string').trim();
//    } while (!string || string.length == 0);
//    // strip all punctuation from string
//    let cleanString = string.replace(/[,.!]/g, '');
//
//    // separate string into array of lowercase words
//    words = cleanString.toLowerCase().split(' ');
//
//    // form object of word counts
//    let wordCounts = {};
//    words.forEach(word => {
//        wordCounts[word] = (wordCounts[word] || 0) + 1;
//    });
//    let results = statsGenerator(cleanString, words, wordCounts, stats);
//    let style = "background-color: #0d6efd; font-weight: bold; font-size: 1rem; padding: .5em 1.2em;"
//    let style2 = "background-color: #0d6efd; color: white; font-weight: bold; font-size: 1rem; padding: .5em 1em;"
//    console.log("%cLenght:%c%i characters", style, style2, results.stringLength);
//    console.log("%cLength witout white-spaces:%c%i characters", style, style2, results.cleanStringLenght);
//    console.log("%cWords:%c%i", style, style2, results.words);
//    console.log("%cUnique Words:%c%i", style, style2, results.uniqueWords);
//    console.log("%cUnique Words(%):%c%i%", style, style2, results.uniqueWordsPercentage);
//    console.log("%cLength of shortest word:%c%i characters", style, style2, results.minWordLenght);
//    console.log("%cLength of longest word:%c%i characters", style, style2, results.maxWordLenght);
//    console.log("%cAvg. word length:%c%i", style, style2, results.averageWordLenght);
//}

//exercise6();

//7. Ejercicio

//Mediante el objeto Math, genera un número aleatorio entero entre 0 y 10, y guárdalo en una variable. 
//A continuación pide al usuario que adivine el número. Tendrá como máximo 3 intentos. El 
//programa debe mostrar el número de intentos disponibles. Si acierta, mostramos el mensaje: “You
//win!”. Si falla, pero le quedan intentos, mostramos el mensaje “Try it again”. Si agota los intentos y 
//no ha conseguido acertar, mostramos el mensaje: “Sorry, Good luck in love”.
//const exercise7 = () => {
//    let toGuess = numberGenerator(10, 0);
//    console.log(toGuess);
//    let attemps = 3;
//    let userWon = false;
//    console.log("Let's play!");
//    let userNumber = prompt("Try to guess a number between 0 and 10");
//    while (--attemps >= 0 && !userWon) {
//        if (toGuess == +userNumber) {
//            alert("You win!");
//            userWon = true;
//        } else if (attemps > 0) {
//            userNumber = prompt(`Try it again, you have ${attemps} more attemps`);
//        }
//    }
//    if (!userWon) {
//        alert("Sorry, Good luck in love");
//    }
//// 
////}
////exercise7();
//
////8. Ejercicio password generator
//
//Investigando como obtener caracteres a partir de valores ASCII, vamos a crear un generador de 
//contraseñas. 
//En primer lugar, pregunta al usuario cuantos caracteres tendrá la contraseña deseada, (mínimo 8 y 
//máximo 16). 
//A continuación, pregunta si quiere incluir, paso a paso, cada uno de los siguientes caracteres: 
//minúsculas, mayúsculas, números y símbolos.
//JavaScript – Ejercicios – Desarrollando algoritmos 2
//En caso de que el usuario diga que no a las 4 posibilidades, la contraseña estará hecha en 
//minúsculas. 
//Cada carácter será generado con la siguiente fórmula: 
//• Math.floor(Math.random() * (max + min + 1) + min;
//En una función que devuelva números enteros aleatorios, y reciba 2 parámetros.
//La contraseña generada debe ser mostrada con alert().
//** Bonus opcional: asegura que la contraseña no contiene 2 caracteres iguales seguidos. **

//const exercise8 = () => {
//
//    let length = parseInt(prompt("Please enter the password length (8 - 16)"));
//    length = length >= 8 && length <= 16 ? length : 8;
//    console.log(length);
//
//    let includeLower = prompt(
//        "Would you like to include lowers (y for yes, n for no)"
//    ).toLowerCase();
//    let withLowers = includeLower == "n" ? false : true;
//
//    let includeUpper = prompt(
//        "Would you like to include uppers (y for yes, n for no)"
//    ).toLowerCase();
//    let withUppers = includeUpper == "n" ? false : true;
//
//    let includeNumber = prompt(
//        "Would you like to include numbers (y for yes, n for no)"
//    ).toLowerCase();
//    let withNumbers = includeNumber == "n" ? false : true;
//
//    let includeSymbol = prompt(
//        "Would you like to include symbols (y for yes, n for no)"
//    ).toLowerCase();
//
//    let withSymbols = (includeSymbol == "n") ? false : true;
//
//    !withLowers &&
//        !withUppers &&
//        !withNumbers &&
//        !withSymbols &&
//        (withLowers = !withLowers);
//    let password = "";
//    let repeatedChar = false;
//    let countingGenPass = 0;
//    while (
//        (withLowers && !/[a-z]/.test(password)) ||
//        (withUppers && !/[A-Z]/.test(password)) ||
//        (withNumbers && !/[0-9]/.test(password)) ||
//        (withSymbols &&
//            !/(!|"|#|[$]|%|&|'|[(]|[)]|[*]|[+]|'|-|.|[/])+/.test(password)) ||
//        repeatedChar
//    ) {
//        countingGenPass++;
//        password = "";
//        repeatedChar = false;
//        for (let i = 0, newChar = false; i < length; i++) {
//            while (!newChar) {
//                switch (Math.floor(Math.random() * 4) + 1) {
//                    case 1:
//                        if (withLowers) {
//                            password += String.fromCharCode(
//                                Math.floor(Math.random() * (122 - 97 + 1)) + 97
//                            );
//                            newChar = !newChar;
//                        }
//                        break;
//                    case 2:
//                        if (withUppers) {
//                            password += String.fromCharCode(
//                                Math.floor(Math.random() * (90 - 65 + 1)) + 65
//                            );
//                            newChar = !newChar;
//                        }
//                        break;
//                    case 3:
//                        if (withNumbers) {
//                            password += String.fromCharCode(
//                                Math.floor(Math.random() * (57 - 48 + 1)) + 48
//                            );
//                            newChar = !newChar;
//                        }
//                        break;
//                    case 4:
//                        if (withSymbols) {
//                            password += String.fromCharCode(
//                                Math.floor(Math.random() * (47 - 33 + 1)) + 33
//                            );
//                            newChar = !newChar;
//                        }
//                        break;
//                }
//            }
//            newChar = !newChar;
//        }
//        for (let i = 0; i < password.length - 1; i++) {
//            if (password[i] == password[i + 1]) {
//                repeatedChar = true;
//                break;
//            }
//        }
//    }
//    alert(`Your password: ${password} in ${countingGenPass} attemps.`);
//
//    let newString = ""
//    for (let i = 33, max = 47; i <= max; i++) {
//        newString += String.fromCharCode(i);
//    }
//    console.log(newString);
//
//    let symbols = "(";
//    for (let i = 33; i <= 47; i++) {
//        if (i < 47) {
//            symbols += String.fromCharCode(i) + "|";
//        } else {
//            symbols += String.fromCharCode(i);
//        }
//    }
//    symbols += ")";
//    console.log(symbols);
//}
//exercise8();
