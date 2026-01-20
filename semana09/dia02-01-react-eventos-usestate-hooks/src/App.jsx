import './estilos.css'

// NOTE: Para añadir estilos a un componente podemos usar el atributo className

const App = () => {
  return (
    <div>
      <h1 className="textoBlanco">app</h1>
      <p style={{ backgroundColor: 'yellow', padding: '1rem' }}>Hola mundo</p>
    </div>
  )
}

export default App