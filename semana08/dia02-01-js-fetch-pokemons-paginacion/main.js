// TODO: Listar los pokemons en la consola usando la pokeapi
// https://pokeapi.co/api/v2/pokemon

// fetch -> Devuelve una promesa

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JS Object

  // TODO: Agregar el id a cada pokemon dentro del arreglo results para usarlo en la imagen del pokemon

  return data
}

const renderPokemons = (pokemons = []) => {
  const pokemonsList = document.querySelector('#pokemonList')

  let elements = ''

  // TODO: Necesitamos agregar una imagen a cada pokemon

  pokemons.forEach(pokemon => {
    elements += `
      <article>
        <h2>${pokemon.name}</h2>
        <img 
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
          width="80"
          height="80"
        />
      </article>
    `
  })

  pokemonsList.innerHTML = elements
}

fetchPokemons()
  .then(data => {
    console.log(data.results)
    renderPokemons(data.results)
  })