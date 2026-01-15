import { createMovie, fetchMovies } from './servicios.js'

const renderMovies = (movies = []) => {
  // TODO: Renderizar las peliculas usando la plantilla del tbody

  const movieList = document.querySelector('.movies__list')

  let html = ''

  movies.forEach(movie => {
    html += `
      <tr>
        <td>
          ${movie.id}
        </td>
        <td>
          <img
            src="${movie.image}"
            onerror="this.src='https://placehold.co/100x150?text=Error'"
          />
        </td>
        <td>
          <strong>${movie.name}</strong>
          <div>
            <strong>Release:</strong> ${movie.release}
          </div>
          <div>
            <strong>Summary:</strong> ${movie.summary}
          </div>
        </td>
        <td>
          <div>
            <button>
              ✏
            </button>
            <button>
              ❌
            </button>
          </div>
        </td>
      </tr>
    `
  })

  movieList.innerHTML = html

  // TODO: remover una película cuando presionamos el boton ❌

  // TODO: Llenar el formulario de pelicula con la data de la pelicula seleccionado cuando presionamos en el botón ✏ y guardar la edición.

}

const moviesForm = document.querySelector('#moviesForm')

moviesForm.addEventListener('submit', async (event) => {
  event.preventDefault() // Evita que el formulario actualice la página

  console.log('Guardando la película...')

  // 1. Extraer los datos del formulario

  const peliculasForm = document.forms['moviesForm']

  console.log({ peliculasForm })

  const name = peliculasForm.name.value
  const image = peliculasForm.image.value
  const release = peliculasForm.release.value
  const genreId = peliculasForm.genreId.value
  const summary = peliculasForm.summary.value

  console.log(name, image, release, genreId, summary)

  // 2. Crear la película en el servidor

  const newMovie = {
    name,
    image,
    release,
    genreId,
    summary
  }

  try {
    const response = await createMovie(newMovie)

    if (!response.ok) {
      console.log('La película no se guardó correctamente')
      return
    }

    console.log('La película se guardó correctamente.')

  } catch(error) {
    console.log(error) // Errores inesperados
  }

  // 3. Actualizar la lista de películas

  const movies = await fetchMovies()

  renderMovies(movies)

  // 4. Limpiamos el formulario

  peliculasForm.reset()
})

fetchMovies()
  .then(data => {
    renderMovies(data)
  })