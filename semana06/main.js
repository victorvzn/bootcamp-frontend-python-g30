// DESTRUCTURING DE ARREGLOS Y OBJETOS

// Un forma de extraer las propiedades/elementos e un objeto o un arreglo en nuevas variables

const miObjeto = {
  nombre: 'Victor',
  apellido: 'Villazón',
  colorFavorito: 'verde',
  edad: 39,
  esMayorDeEdad: true,
  coloresFavoritos: ['azúl', 'rojo', 'morado'],
  'mi edad': 44,
  cursos: [
    {
      nombre: 'Matemática',
      nota: 18
    }, {
      nombre: 'Algoritmos',
      nota: 14
    }
  ],
  devolverCursosAprobados: function () {
    return this.cursos.filter(function(curso) {
      return curso.nota > 14
    })
  }
}

// Sin destructuring

const nombreValue = miObjeto.nombre
const apellidoValue = miObjeto.apellido
const cursosValue = miObjeto.cursos

console.log(nombreValue, apellidoValue, cursosValue)

// Con destructuring

const { colorFavorito, cursos, edad } = miObjeto

console.log(colorFavorito, cursos, edad)

// Alias en destructuring de objetos

const {
  colorFavorito: colorFavoritoValor,
  cursos: cursosValor
} = miObjeto

console.log(colorFavoritoValor, cursosValor)

// DESTRUCTURING EN ARRAYS

const amigos = ['leo', 'marcial', 'diego', 'andrea', 'victor']

// Sin destructuring

const amigoLeo = amigos[0]
const amigaAndrea = amigos[3]
const amigoVictor = amigos[4]

console.log(amigoLeo, amigaAndrea, amigoVictor)

// Con destructuring

const [amigo1, amigo2, , amigo3, amigo4] = amigos

console.log(amigo1, amigo2, amigo3, amigo4)

// DESTRUCTURING + SPREAD OPERATOR (...)

// Una sintaxis que permite expandinf los elementos de un iterable(arrays, strings, objetos)

const [miMejorAmigo, ...misNoTanAmigos] = amigos

console.log(miMejorAmigo, misNoTanAmigos)

// SPREAD OPERADOR EN OBJETOS

// Extrae los propiedades de un objeto/arreglo para reutilizar en otros objetos/arreglos

const producto = {
  nombre: 'Laptop',
  precio: 7599,
  categoria: 'tech'
}

const cliente = {
  nombre: 'David',
  isVip: true
}

// ¿Cómo juntamos las propiedades producto y cliente en un solo objeto?

console.log(producto + cliente) // ❌ 💔 😵 [object Object][object Object]

const nuevoObjeto1 = { producto: producto, cliente: cliente }

console.log(nuevoObjeto1) // {producto: {…}, cliente: {…}}

const nuevoObjeto2 = { ...producto, ...cliente }

console.log(nuevoObjeto2) // El nombre del producto fue sobreescrito ❓ ¡CUIDADO!

// SPREAD OPERATOR EVITANDO "COLISIONES DE PROPIEDADES"

const nuevoObjetoSinColisiones = {
  producto: producto,
  cliente: cliente
}

console.log(nuevoObjetoSinColisiones)
console.log(nuevoObjetoSinColisiones.producto.nombre)
console.log(nuevoObjetoSinColisiones.cliente.nombre)

// OTROS MÉTODOS DE OBJETOS

console.log(Object.keys(producto)) // Obtenemos solo las claves(keys) del objeto y son devueltas en un arreglo
console.log(Object.values(producto)) // Obtenemos solo las valores(values) del objeto y son devueltas en un arreglo
console.log(Object.entries(producto)) // Convertimos un objeto en un arreglo y lo que devuelve es un arreglo de arreglos.

// Arrow function, let, const, template strings, destructuring, clases, módulos, promesas

// ARROW FUNCTION: () => {}

// Es una forma corta de escribir una función

// Forma larga

function nombreDeLafuncion(parametro1, parametro2) {
  return 'Hola a todos'
}

nombreDeLafuncion()

// Forma corta con Arrow function

const nombreDeLafuncion2 = () => {}




