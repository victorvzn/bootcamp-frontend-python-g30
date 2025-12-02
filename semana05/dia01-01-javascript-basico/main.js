// COMENTARIOS

// console.log('¡Hola Javascript desde un archivo externo!')

/*
  Esto
  es
  un
  comentario
  de
  múltiples
  líneas
*/

// TIPOS DE DATOS

// https://developer.mozilla.org/es/docs/Web/JavaScript
// https://lenguajejs.com/javascript/

// PRIMITIVOS: 
//   * Number (Números), String (cadena de texto), Boolean (true, false)
//   * undefined, null, BigInt, Symbol, ...

// NUMBERS, para js los enteros, decimales, son Numbers

console.log(20)
console.log(12.50)
console.log(-56)

console.log(typeof 20)     // number
console.log(typeof 12.50)  // number
console.log(typeof -56)    // number

// STRING o Cadenas de texto

console.log('Sebastian')
console.log("Sebastian")
console.log('Sebastian\'s')

console.log(typeof 'Sebastian')     // string
console.log(typeof "Sebastian")     // string
console.log(typeof 'Sebastian\'s')  // string

// BOOLEAN -> Verdadero(true) o False(false)

console.log(true)
console.log(false)

console.log(typeof true) // boolean

// UNDEFINED, lo asigna Javascript

let nombre // No hemos asignado un valor a la variable

console.log(nombre)         // undefined
console.log(typeof nombre)  // undefined

// NULL, no tiene un valor una variable

// let apellido = undefined // ❌
let apellido = null

console.log(apellido)
console.log(typeof apellido) // object❓ No usemos el typeof para verificar si el null en su lugar usemos el === Ej. apellido === null

// BigInt (Tipo de dato primitivo)
// Symbol (Tipo de dato primitivo)


// VARIABLES Y CONSTANTES

// Nos sirven para guardar datos en memoria y reutilizarlos o modificarlos durante el tiempo que nuestro programa se esté ejecutando.

// ECMASCRIPT 6 === ES6
// const, para valores fijos
// let, se usa cuando el valor cambia

// ECMASCRIPT 5 === ES5
// var -> Forma de declarar una variable pero no es recomendable su uso actualmente ❌

// CONST -> ES6 (Si es recomendable usar actualmente)

const edad = 55 // Es obligatorio inicializarlo
const _edad = 25
const edadDeMiHijo = 17  // Estamos usando el estilo camelCase. Hay otros PascalCase, snake_case, kebab-case
const PI = 3.14
const nombre2 = "Victor"

// edad = 33 // ❌ Uncaught TypeError: Assignment to constant variable.
// edad-de-mi-hijo = 33 // ❌ Uncaught SyntaxError: Invalid left-hand side in assignment

console.log(edad)
console.log(edad)

// LET -> ES5 (Si es recomendable usar actualmente)

let edad2 = 35 // Nota: no es obligatorio inicializarlo

edad2 = 89    // Lo sobreescribe con el mismo tipo, number
edad2 = "36" // Lo sobreescribe con un tipo de dato nuevo, string
edad2 = true
edad2 = 87

console.log(edad2)
console.log(typeof edad2)