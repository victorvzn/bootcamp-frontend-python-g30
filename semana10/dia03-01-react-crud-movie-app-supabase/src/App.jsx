import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select('*')

      return response.data
    }  

    fetchMovies()
      .then(data => setMovies(data))
  }, [])

  return (
    <div>
      
      <h1 className="text-2xl">Movies</h1>

      <ul className="list-disc">
        {movies.map(movie => {
          return (
            <li key={movie.id}>{movie.name}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App