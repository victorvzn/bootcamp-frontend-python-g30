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
   
  return (
    <div>
      

      <pre>{JSON.stringify(tareas, null, 2)}</pre>
    </div>
  )
}

export default App