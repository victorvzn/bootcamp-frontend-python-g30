// useEffect, no ayuda a controlar el ciclo de vida un componente
// CREACIÓN, ACTUALIZACIÓN Y ELIMINACIÓN DEL COMPONENTE

import { useState } from "react"
import { useEffect } from "react"

const App = () => {
  const [contador, setContador] = useState(0)
  const [students, setStudents] = useState([])

  useEffect(() => {
    console.log('CICLO DE VIDA: CREACIÓN / ACTUALIZACIÓN')
  }, [contador]) // Se ejecuta el useEffect al cargar el componente la primera vez

  useEffect(() => {
    console.log('LA PRIMERA VEZ')
    fetch('https://697828f05b9c0aed1e882a5d.mockapi.io/v1/students')
      .then(response => response.json())
      .then((data) => setStudents(data))
  }, []) // Este useEffect se ejecuta la primera vez

  return (
    <div>
      
      <button onClick={() => setContador(contador + 1)}>+1</button>

    </div>
  )
}

export default App