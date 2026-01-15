const url = 'http://localhost:3000/movies'

export const fetchMovies = async () => {
  const response = await fetch(url) // Esperar la respuesta del servidor (asincrona)

  return await response.json() // Esperar a la conversión de JSON a Objeto JS (asincrona)
}