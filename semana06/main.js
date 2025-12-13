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

