import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"

const App = () => {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({
    name: ''
  })

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select('*')

      return response.data
    }

    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  const handleSave = async (event) => {
    event.preventDefault()

    console.log('Creando la película', form)
  }

  return (
    <div>
      <section>
        <h1 className="text-2xl">Movies</h1>

        <form onSubmit={handleSave}>
          <input
            type="text"
            name="name"
            className="border"
            placeholder="Nombre de la película"
            required
            onChange={(event) => setForm(event.target.value)}
            value={form.name}
          />
          <input
            type="submit"
            value="Guardar"
            className="bg-orange-300"
          />
        </form>

        <h1 className="text-2xl">Lista de películas</h1>

        <ul className="list-disc list-inside pl-4">
          {movies.map(movie => {
            return (
              <li key={movie.id}>{movie.name}</li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default App