import { useState } from "react"

import TareaTitulo from "./components/TareaTitulo"
import TareaFormulario from "./components/TareaFormulario"

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

  const handleRemover = (id) => {
    // TODO: Remover la tarea seleccionada al presionar el botón de la ❌
    console.log('Remover tarea con id:', id)

    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id)

    setTareas(tareasActualizadas)
  }

  // TODO: Actualizar el estado de la tarea a completado
  const handleCompletado = (id) => {
    console.log('Actualizando tarea', id)

    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        // Aquí vamos a modificar la propiedad completado a true o a false
        return {
          ...tarea,
          completado: !tarea.completado
        }
      }

      return tarea
    })

    setTareas(tareasActualizadas)
  }

  const tareasCompletadas = tareas.filter(tarea => tarea.completado)

  const handleLimpiarTareasCompletadas = () => {
    // TODO: Limpiar las tareas completadas del estado tareas
    console.log('COmpletando tareas')
  }

  const handleSave = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea])
  }
   
  return (
    <main className="flex flex-col gap-4">
      <TareaTitulo titulo='Todo App + React + Tailwind (Componentes)' />

      <TareaFormulario onSubmit={handleSave} />

      <section className="bg-blue-200 flex justify-between p-4">
        <span>
          {tareasCompletadas.length} de {tareas.length} completadas
        </span>

        <button
          className="bg-green-400 p-2"
          onClick={handleLimpiarTareasCompletadas}
        >
          Limpiar completadas
        </button>
      </section>

      <ul className="flex flex-col gap-2 p-4">
        {tareas.map(tarea => {
          return (
            <li className="flex justify-between" key={tarea.id}>
              <div className="flex gap-2">
                <input
                  type="checkbox"
                  onChange={() => handleCompletado(tarea.id)}
                  checked={tarea.completado}
                />

                {/* TODO: la clase line-through solo debe añadirse al className si tarea.completado es true */}

                <span className={ tarea.completado ? "line-through text-red-500" : '' }>
                  {tarea.titulo}
                </span>
              </div>

              <button
                className="cursor-pointer"
                onClick={() => handleRemover(tarea.id)}
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