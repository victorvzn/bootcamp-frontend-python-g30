import { useEffect, useState } from "react"
import { fetchProducts } from "../services/products"

export const useProducts = () => {
  const [products, setProducts] = useState([])

  // TODO: Leer los productos y listarlos desde el servicio de dummyjson (https://dummyjson.com/products).
  useEffect(() => {
    fetchProducts()
      .then(data => setProducts(data.products))
  }, [])
  
  return {
    products
  }
}