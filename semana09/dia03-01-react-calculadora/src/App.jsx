const App = () => {
  const operaciones = ['+', '-', '*']
  const numeros = [
    '7', '8', '9',
    '4', '5', '6',
    '1', '2', '3',
    '0'
  ]
  const acciones = ['CE', '=']

  const handleButton = () => {
    console.log('Hice click!')
  }

  // for, while, do while, forEach, map, filter, reduce
  return (
    <main className="bg-blue-400 w-[340px] mx-auto mt-5 p-4 rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">
        Calculadora con React
      </h1>

      <section className="flex flex-col gap-2">
        <input
          type="text"
          readOnly
          className="border p-2 text-right text-3xl font-bold rounded-md bg-slate-200"
          value={0}
        />

        <div className="grid grid-cols-3 gap-4">
          {operaciones.map(operacion => {
            return (
              <button
                className="button bg-red-400 p-2 rounded-md hover:bg-red-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
              >
                {operacion}
              </button>
            )
          })}

          {/* TODO: Recorrer el arreglo de numero y acciones y reenderizar su contenido en un boton. */}

          {numeros.map(numero => {
            return (
              <button
                className="button bg-yellow-400 p-2 rounded-md hover:bg-yellow-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
              >
                {numero}
              </button>
            )
          })}

          {acciones.map(accion => {
            return (
              <button
                className="button bg-green-400 p-2 rounded-md hover:bg-green-500 duration-300 text-black text-xl font-bold"
                onClick={handleButton}
              >
                {accion}
              </button>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default App