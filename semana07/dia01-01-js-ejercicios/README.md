# Javascript ejercicios

### [Reto01 - Contando ovejas para dormir](https://2021.adventjs.dev/challenges/01)

```js
/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

function contarOvejas(ovejas) {
  return ovejas.filter((oveja) => {
    const nombreEnMiniscula = oveja.name.toLowerCase()
    
    const esColorRojo = oveja.color === 'rojo'
    const tieneLetraN = nombreEnMiniscula.includes('n')
    const tieneLetraA = nombreEnMiniscula.includes('a')

    return esColorRojo && tieneLetraN && tieneLetraA
  })
}

const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)

// Respuesta deseada:

// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]
```

### [Reto10 - La  máquina de cambio](https://2021.adventjs.dev/challenges/10)

```js
/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que 
"calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra"
en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos

Tenemos que crear una función que recibe el número de céntimos que hay que devolver al cliente y la función nos da un array con la combinación de monedas mínimas que debemos usar para conseguirlo.
*/

function getCoins(change) {
  const monedas = [1, 2, 5, 10, 20, 50]
  
  let acumulador = change

  return monedas
    .reverse()
    .map(function(moneda) {
      let cociente = Math.floor(acumulador / moneda)
      
      if (cociente > 0) {
        acumulador = acumulador % moneda // Residuo
      }
      
      return cociente
    })
    .reverse()
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
```

### [Reto2 (2023) - Ponemos en marcha la fábrica](https://adventjs.dev/challenges/2023/2)

```js
/*
En el taller de Papá Noel, los elfos tienen una lista de regalos que desean hacer y un conjunto limitado de materiales.

Los regalos son cadenas de texto y los materiales son caracteres . Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden hacer .
*/

// Método EVERY, devuelve un boolean si todos los elementos del array cumplen una condición

[1, 2, 3, 4, 5].every(numero => numero > 0);

[1, 2, 3, 4, 5, -5].some(numero => numero % 2 === 0);

function manufacture(gifts, materials) {
  return gifts.filter((gift) => {
    const copiaDelRegalo = [...gift]

    return copiaDelRegalo.every(letraDelRegalo => {
      return materials.includes(letraDelRegalo)
    })
  })
}

const gifts1 = ['tren', 'oso', 'pelota']
const materials1 = 'tronesa'

manufacture(gifts1, materials1) // ["tren", "oso"]

const gifts2 = ['juego', 'puzzle']
const materials2 = 'jlepuz'

manufacture(gifts2, materials2) // ["puzzle"]

const gifts3 = ['libro', 'ps5']
const materials3 = 'psli'

manufacture(gifts3, materials3) // []
```

