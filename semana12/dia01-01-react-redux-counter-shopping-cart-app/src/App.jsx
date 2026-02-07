import Counter from "./components/Counter"

const App = () => {
  return (
    <main className="flex flex-col gap-8 p-4">
      <Counter />

      <Counter />
    </main>
  )
}

export default App