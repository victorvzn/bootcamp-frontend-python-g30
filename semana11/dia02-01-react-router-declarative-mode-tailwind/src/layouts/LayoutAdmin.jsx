import { Link, Outlet } from "react-router"

const LayoutAdmin = () => {
  return (
    <>
      <header className="bg-blue-300 p-4">
        <div className="container mx-auto flex justify-between">
          <h1 className="font-bold">React router - Admin</h1>

          <nav className="flex gap-4">
            <Link to='/login'>Login</Link>
            <Link to='/register'>Register</Link>
            <Link to='/'>Home</Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto m-6">
        <Outlet />
      </main>
    </>
  )
}

export default LayoutAdmin