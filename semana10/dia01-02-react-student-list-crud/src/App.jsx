const App = () => {
  const DEFAULT_STUDENTS = [
    {
      id: "1",
      name: "Bulma",
      city: 'Chiclayo'
    },
    {
      id: "2",
      name: "Goku",
      city: 'Trujillo'
    },
    {
      id: "3",
      name: "Vegeta",
      city: 'Lima'
    }
  ]

  // TODO: Crear un estado y listar los estudiantes del arreglo DEFAULT_STUDENTS

  return (
    <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center text-slate-700 font-bold mb-4">Student CRUD</h1>

      <form
        className="flex flex-col gap-4 bg-slate-100 p-3 rounded-lg border"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">Name</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium text-slate-900">City</span>
          <input
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg w-full px-3 py-2"
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
          />
        </label>

        <div className="flex gap-4">
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
            type="submit"
            value="Save"
          />
          <input
            className="bg-blue-700 text-white hover:bg-blue-800 font-medium rounded-lg text-sm w-full px-5 py-3 text-center"
            type="reset"
            value="Limpiar"
          />
        </div>
      </form>

      <h2 className="text-center text-slate-700 font-bold my-4">Student List</h2>

      <section className="mt-4 flex flex-col gap-2">
        
        <div className="flex justify-between items-center gap-2 bg-slate-50 px-3 py-2 rounded-lg border">
          <div>iMAGEN</div>
          <div className="text-left">NAME</div>
          <div className="text-left">CITY</div>
          <div className="flex gap-2">
            <button>✏</button>
            <button>❌</button>
          </div>
        </div>

      </section>
    </main>
  )
}

export default App