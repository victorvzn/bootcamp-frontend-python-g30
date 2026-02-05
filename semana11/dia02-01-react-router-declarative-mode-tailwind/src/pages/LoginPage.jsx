import { useState } from "react"

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <h2>Login son supabase</h2>

      <form>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>

        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </label>

        <input type="submit" value="Login" />

      </form>
    </>
  )
}

export default LoginPage