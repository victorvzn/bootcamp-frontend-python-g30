const LoginPage = () => {
  return (
    <>
      <h2>Login son supabase</h2>

      <form>
        <label>
          Email
          <input type="email" name="email"  />
        </label>

        <label>
          Password
          <input type="password" name="password"  />
        </label>

        <input type="submit" value="Login" />

        
      </form>
    </>
  )
}

export default LoginPage