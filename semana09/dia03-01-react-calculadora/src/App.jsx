const App = () => {
  const operaciones = ['+', '-', '*']
  const numeros = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0'
  ]
  const acciones = ['CE', '=']


  // for, while, do while, forEach, map, filter, reduce
  return (
    <main className="bg-blue-400 w-[340px] mx-auto mt-5 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Calculadora con React
      </h1>

      <section>
        <input
          type="text"
          readOnly
          className="border"
        />

        <div>
          {operaciones.map(operacion => {
            return (
              <button>{operacion}</button>
            )
          })}

          {/* TODO: Recorrer el arreglo de numero y acciones y reenderizar su contenido en un boton. */}

          {numeros}

          {acciones}
        </div>
      </section>
    </main>
  )
}

export default App