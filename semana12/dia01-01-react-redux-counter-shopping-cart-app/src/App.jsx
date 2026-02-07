import Counter from "./components/Counter"
import ProductList from "./components/ProductList"

const App = () => {
  return (
    <main className="flex flex-col gap-8 p-4">
      <section>

        <ProductList />

        {/* <ShoppingCart /> */}

      </section>

      <Counter />

      <Counter />
    </main>
  )
}

export default App