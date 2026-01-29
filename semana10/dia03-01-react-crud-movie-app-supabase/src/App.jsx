import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase"

const App = () => {
  const [movies, setMovies] = useState([])
  const [form, setForm] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [session, setSession] = useState(null)

  useEffect(() => {
    const getInitialSession = async () => {
      const { data, error } = await supabase.auth.getSession()

      setSession(data.session)
    }

    getInitialSession()
  }, [])

  useEffect(() => {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) {
      console.error(error.message)
      return
    }

    setSession(data.session)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setSession(null)
  }

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await supabase.from('movies').select('*')

      console.log(response)

      setMovies(response.data)
    }  

    fetchMovies()
  }, [])
  

  const handleSave = async (event) => {
    event.preventDefault()

    const response = await supabase.from('movies').insert([
      { name: form.name }
    ])

    console.log(response)

    const response2 = await supabase.from('movies').select('*')

    console.log(response2)

    setMovies(response2.data)
  }

  return (
    <main>
      <section>
        {!session ? (
          <>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input name="email" onChange={(event) => setEmail(event.target.value)} placeholder="email" />
              <input name="password" onChange={(event) => setPassword(event.target.value)} placeholder="password" />
              <input type="submit" />
            </form>
          </>
        ) : (
          <>
            <h1>Bienvenido {session?.user?.email}</h1>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </section>


      <section>
        <h1>Movie CRUD con Supabase</h1>
        

        <form onSubmit={handleSave}>
          <input name="name" onChange={(event) => setForm(event.target.value)} placeholder="name" />
          <input type="submit" />
        </form>

        <div>Total: {movies.length}</div>

        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              {movie.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App