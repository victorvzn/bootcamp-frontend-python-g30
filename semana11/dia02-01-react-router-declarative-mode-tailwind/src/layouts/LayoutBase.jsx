import { Outlet } from "react-router"

const LayoutBase = () => {
  return (
    <>
      <h1>LAYOUT BASE</h1>

      <Outlet />
    </>
  )
}

export default LayoutBase