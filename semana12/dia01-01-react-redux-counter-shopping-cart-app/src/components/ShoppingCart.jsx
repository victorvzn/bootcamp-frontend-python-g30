import { useSelector } from "react-redux"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <>
      <div>ShoppingCart</div>

      <pre>{JSON.stringify(cart, null, 2)}</pre>

    </>
  )
}

export default ShoppingCart