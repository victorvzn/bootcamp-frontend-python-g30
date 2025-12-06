// FUNCIONES (Son bloques de código que podemos reutilizar)

// Declaración
function nombreDeLaFuncion() {
  // Cuerpo de la función y aquí va la lógica a ejecutar y las que vamos a reutlizar
  console.log('Hola soy una función')
  console.log('Soy un bloque de código')
}

// Ejecutar, estamos llamando a la función
nombreDeLaFuncion()
nombreDeLaFuncion()

// Funciones sin parámetros

function imprimirMiNombre() {
  console.log('¡Hola soy Victor!')
  console.log('Y soy fullstack')
}

imprimirMiNombre()

// Funciones con parámetros y valores por defecto

function imprimirUnNombre(nombre, nivel = 'el mejor') {
  // if (!nivel) { ❌
  //   nivel = 'el mejor'
  // }

  console.log('¡Hola soy ' + nombre + '!')
  console.log('Y soy ' + nivel)
}

imprimirUnNombre() // ¡Hola soy undefined! ❓
imprimirUnNombre('David', 'Fullstack') // ¡Hola soy David! Y soy Fullstack 😎
imprimirUnNombre('Diego') // ¡Hola soy Diego! Y soy el mejor 😎

// EJERCICIOS

// 1. Usando funciones determinar si la edad de una persona es mayor o menor de edad mostrando 'Mayor de edad' o 'Menor de edad.

function esMayorOMenorDeEdad(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }
}

esMayorOMenorDeEdad(39) // Mayor de edad
esMayorOMenorDeEdad(8)  // Menor de edad
esMayorOMenorDeEdad(17)  // Menor de edad

// 2. Retornar true si un numero es primo sino devolver false
// Pista: un numero primo es divisible por sí mismo y por 1

// 7 -> 1 (2 3 4 5 6) 7

function esNumeroPrimo(numero) {
  if (numero <= 1) {
    return false
  }

  for (let posibleDivisor=2; posibleDivisor < numero; posibleDivisor++) {
    console.log('esNumeroPrimo', posibleDivisor)
    if (numero % posibleDivisor === 0) {
      return false
    }
  }

  return true
}

console.log(esNumeroPrimo(7)) // true
console.log(esNumeroPrimo(10)) // false
console.log(esNumeroPrimo(15)) // false

// FUNCIONES SIN RETORNO

function esMayorOMenorDeEdadSinRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    console.log('Mayor de edad')
  } else { // si es false se ejecuta
    console.log('Menor de edad')
  }

  // FUNCION QUE NO RETORNA NADA === undefined
}

esMayorOMenorDeEdadSinRetorno(39)

// FUNCIONES CON RETORNO

function esMayorOMenorDeEdadConRetorno(edad) {
  if (edad >= 18) { // si es true se ejecuta
    return 'Mayor de edad'
  } else { // si es false se ejecuta
    return 'Menor de edad'
  }
}

const resultado = esMayorOMenorDeEdadConRetorno(39)

console.log('RESULTADO:', resultado)