import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"
import { fetchMovies } from "./services/movies"

const App = () => {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState({
    name: ''
  })

  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')
  const [session, setSession] = useState(null)

  useEffect(() => {
     fetchMovies()
      .then(data => setMovies(data))
  }, [])

  useEffect(() => {
    const getInitialSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      setSession(data.session)
    }

    getInitialSession()
  }, [])

  const handleSave = async (event) => {
    event.preventDefault()

    console.log('Creando la película', form)

    const response = await supabase.from('movies').insert([
      { name: form.name }
    ])

    fetchMovies()
      .then(data => setMovies(data))

    setForm({
      name: ''
    })
  }

  // TODO: Eliminar las películas usando supabase agregando una política para eliminar registros.

  const handleLogin = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      console.log(error.message)
      return
    }

    console.log(data.session, data.user)

    setSession(data.session)
  } 

  return (
    <div>
      <section>
        {!session
        ? (
          <>
            <h1 className="text-2xl">Login</h1>

            <form onSubmit={handleLogin}>
              <input
                name="email"
                placeholder="Email"
                className="border"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
              <input type="submit" value="Login" className="bg-blue-300" />
            </form>
          </>
        ) : (
          <h1 className="text-2xl">Bienvenido, {session?.user?.email}</h1>
        )}
      </section>

      <section>
        <h1 className="text-2xl">Movies</h1>

        <form onSubmit={handleSave}>
          <input
            type="text"
            name="name"
            className="border"
            placeholder="Nombre de la película"
            required
            onChange={
              (event) => setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            value={form.name}
          />
          <input
            type="submit"
            value="Guardar"
            className="bg-orange-300"
          />
        </form>

        <h1 className="text-2xl">Lista de películas</h1>

        <ul className="list-disc list-inside pl-8">
          {movies.map(movie => {
            return (
              <li key={movie.id} className="">
                {movie.name}
                <button>❌</button>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}

export default App