import { fetchMovies } from './servicios.js'

const renderMovies = (movies = []) => {
  // TODO: Renderizar las peliculas usando la plantilla del tbody
}

fetchMovies()
  .then(data => {
    console.log(data)
  })