// TODO: Listar los pokemons en la consola usando la pokeapi
// https://pokeapi.co/api/v2/pokemon

// fetch -> Devuelve una promesa

const fetchPokemons = async () => {
  const API_URL = 'https://pokeapi.co/api/v2/pokemon'

  const response = await fetch(API_URL) // Devuelve una promesa

  const data = await response.json() // Convierte la respuesta en formato JS Object

  // ????

  return data
}

const renderPokemons = () => {
}

fetchPokemons()
  .then(data => {
    console.log(data)
  })