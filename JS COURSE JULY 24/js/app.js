// //dia 1
// // [11:11] fullstack_aula2
// // //CONSOLE.LOG
// // console.log("Hola mundo!");
// // console.log("Hola mundo! 2");

// // //VARIABLES
// // nombre = "Cristina";
// // nombre = 38;

// // let edad = 30;
// // nombre = "Lola";

// // console.log("nombre:" + nombre);
// // console.log(edad);

// // const pi = 3.1416;
// // // pi = "croissant";

// // console.log(pi);

// // // TIPOS DE DATOS
// // let str = "Hola mundo";

// // console.log(nombre + " " + edad + " " + str);

// // let num1 = 2;
// // let num2 = 5;
// // let suma = num1 + num2;

// // console.log(suma);

// // let bandera = true;

// // function evenOdd() {
// //   const resultado = num2 % 2 === 0 ? "par" : "odd";
// // }

// // let array = ["manzana", "melón"];
// // // array += 1;
// // array.push("platano");
// // array.push("naranja");
// // array.pop([0]);
// // console.log("valor de nuestro array:", array);

// // let coches = ["ford", "seat", "chevrolet"];

// // console.log(array);

// // let calle;
// // // calle = "Calle Larios";
// // console.log(calle);

// //dia 2

// //Operadores

// //aritmeticos
// // let num1 = 2;
// // let num2 = 0;

// // let suma = num1+num2;
// // // console.log(suma);
// // let resta = num1 - num2;
// // console.log(resta);
// // let div = num1 / num2;
// // console.log(div);// error para depurar infinito

// //programa para calcular el area de un rectangulo

// //let altoOriginal = 10; //variables en camelCase
// //let largoOriginal = 20;
// //let areaRectangulo = altoOriginal * largoOriginal;
// //console.log(areaRectangulo);

// //comparacion

// // let saludo = "5";
// // let saludo2 = 5;
// // let comparacion = saludo == saludo2; //== nos compara los datos pero no el tipo
// // console.log(comparacion);              //para el comparador estricto de valores y tipos usariamos ===

// // let num3 = "5";
// // let  num4Str = 5;
// // let comparacionNums = num3 === num4Str;
// // console.log(comparacionNums);

// // !== es lo contrario a la igualdad estricta

// // let num1 = 2;
// // let num2 = 0;

// // let suma = num1 + num2;
// // console.log(suma);
// // let resta = num1 - num2;
// // console.log(resta);

// // let suma2 = suma;
// // let resta2 = resta;

// // let calculo = suma2 !== resta2;
// // console.log(calculo);

// // // > o >=
// // resta = 11;
// // let comprobacion = suma > resta;
// // console.log(comprobacion);

// // < o <=

// // let comprobacion2 = suma <= resta;
// // console.log(comprobacion2);

// // operadores logicos

// //combina multiples expresiones siempre devuelven valores booleanos

// // && : ambas condiciones deben ser ciertas para que sea TRUE
// //AND
// let edad = 20;
// let permisoConducir = true;

// let coche = edad > 18 && permisoConducir;
// console.log(coche);

// // OR || la diferencia con el anterior es que las condiciones si una de las dos es TRUE, da true siempre
// let lluvia = true;
// let tormenta = false;

// let quedarseEnCasa = lluvia || tormenta;
// console.log(quedarseEnCasa);

// // MIX de || y &&

// let tengoDinero = false;
// let creditCard = true;
// let tiendaAbierta= true;

// let irAComprar = (tengoDinero || creditCard) && tiendaAbierta;
// console.log("podemos ir a comprar?:", irAComprar);

// // ! devuelve lo contrario de lo que tiene
// let nieve = true;
// let snowBoard = false;
// let irALaNieve = nieve && !snowBoard;
// console.log('podemos ir a la nieve?:', irALaNieve);


// //Estructuras de control

// //1 condicionales
// // 2 bucles for y while

// //1 Condicionales if y else

// // if(condicion a cumplir){
// //     codigo a ejecutar si se cumple la condicion 

// // } else if (otra posible condicion){
// //     bloque para otra condicion 

// // } else {
// //     si no entra en ninguna condicion ejecuta este codigo 
// // }

// let age = 18;
// let driverLicense = true;

// if(age >= 18 && driverLicense){
//     console.log('Enhorabuena ahora puedes conducir');
      
// }else {
//     console.log('Aun no puedes conducir');
    
// }

// let esFinde = true;
// let vacaciones = false;
// if (esFinde||vacaciones){
//     console.log('ahora toca descansar');
    
// }else {
//     console.log('a trabajar');
    
// }

//Bucle FOR

//esta es su sintaxis
// for (let i = 0; i <= 5; i++){
//    console.log(i);
   
// }

// let frutas = ["manzana","pera","platano","kiwi"];

// for(let i = 0; i< frutas.length; i++){
//     console.log(frutas[i]);
// }
// console.log(frutas[10]);

//Bucle While

// let counter = 0;
// while (counter < 5){
//     counter++; // lo mismo que decir counter += 1;
// console.log(counter);
// }

//jugar a los dados con while

// let tiradaDados;
// while (tiradaDados !== 6){
//     tiradaDados = Math.floor(Math.random()*6)+1;
//     console.log(`Tira los dados: ${tiradaDados}`);

// }
// console.log('Felicidades, has sacado un 6');

// dia 2
//FUNCIONES

///Funciones nombradas

// function saludar(nombre){
//     console.log(`Hola!` +""+ nombre + "!")
    
// }
// saludar("a todos");

// //funcion anonima

// let sumar = function(a,b){
//     return a + b;
    
// };
// console.log(sumar(2,5));

//Alcance de una variable

function multiplicar (a,b){
    let multiplicacion = a*b;
    return multiplicacion;
        
}
console.log(multiplicar(2,2));

//funcion que calcule el area de un rectangulo

function area(w,h){
    let area2 = w*h;
    return area2;
}
console.log(area(20,10));

//crea un programa que reciba un numero y te diga si es par o impar

// function evenOdd(number){
//     if (number % 2 === 0){
//         console.log("el número es par");
        
//     }
//     else if (number % 2 !== 0 && typeof number === "number"){
//         console.log("el número es impar");
        
//     }
//     else {
//         console.log("Hay un error, introduzca un numero valido");
        
//     }
// }
// evenOdd(1);

//Manipulacion del DOM (DOC OBJECT MODEL)

//let parrafo = document.querySelector("#parrafo");
//console.log(parrafo);
//parrafo.textContent ="Soy un parrafo tambien";
//
//let parrafo2 = document.querySelector("#parrafo2");
//console.log(parrafo2);
//parrafo2.textContent = "Soy el segundo parrafo y soy el mejor";

// let elementosLista = document.querySelectorAll("li");
// console.log(elementosLista);
// elementosLista.forEach(li => {
//     li.style.backgroundColor = "red";
// });

//crear un nuevo elemento dinamicamente

let nuevoElemento = document.createElement("div");
nuevoElemento.textContent = "Hola, soy un div creado dinamicamente.";
document.body.appendChild(nuevoElemento);


let nuevoDiv = document.createElement("div");
nuevoDiv.textContent = "Hola de nuevo otro div";
nuevoDiv.style.backgroundColor = "pink";
document.body.appendChild (nuevoDiv);

nuevoDiv.setAttribute("id", "idPersonalizado");
console.log(nuevoDiv);

















