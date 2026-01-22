import { useState } from "react"

const App = () => {
  const DEFAULT_TAREAS = [
    {
      id: '1',
      titulo: 'Aprender Javascript',
      completado: true
    },
    {
      id: '2',
      titulo: 'Aprender CSS',
      completado: false
    },
    {
      id: '3',
      titulo: 'Aprender React.js + Tailwind CSS',
      completado: false
    },
  ]

  const [tareas, setTareas] = useState(DEFAULT_TAREAS)

  // TODO: renderizar la lista de tareas del estado tareas (tip: usar el map sobre el arreglo en el ul)
   
  return (
    <main className="flex flex-col gap-4">
      <h1>Todo App + React + Tailwind</h1>

      <form className="flex gap-2">
        <input
          type="text"
          className="border p-1"
        />
        <input
          type="submit"
          value="Añadir"
          className="bg-blue-400 p-2"
        />
      </form>

      <section className="bg-blue-200 flex justify-between p-4">
        <span>0 de 0 completadas</span>

        <button
          className="bg-green-400 p-2"
        >
          Limpiar completadas
        </button>
      </section>

      <ul className="flex flex-col gap-2 p-4">
        {tareas.map(tarea => {
          return (
            <li className="flex justify-between" key={tarea.id}>
              <div className="flex gap-2">
                <input type="checkbox" />

                <span>
                  {tarea.titulo}
                </span>
              </div>

              <button
                className="cursor-pointer"
              >
                ❌
              </button>
            </li>
          )
        })}
      </ul>

      <pre>{JSON.stringify(tareas, null, 2)}</pre>
    </main>
  )
}

export default App