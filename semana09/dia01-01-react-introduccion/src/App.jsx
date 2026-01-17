// 05 - Anidando componentes dentro de otros

function ComponenteSaludo() {
  return <h4>Hola alumnos!</h4>
}

function ComponenteDespedida() {
  return <h4>Vamos al receso!</h4>
}

export default function App() {
  return (
    <section>
      <h3>Componentes anidados</h3>      

      <ComponenteSaludo />

      <ComponenteDespedida />
    </section>
  )
}


// 04 - Extensiones de VSCODE necesarias para usar React
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// Snippets para crear componentes (rfc, rafce)

// snippet: rfc

// export default function App() {
//   return (
//     <div>Hola React!</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App

// 03 - Componente usando múltiples líneas + Fragments (<></>)

// const App = () => {
//   return (
//     <>
//       <h1>Hola React!</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </>
//   )
// }

// export default App

// 02 - Componente base usando arrow functions

// const Welcome = () => {

//   return <h1>Bienvenidos a React.js con Arrow function!</h1>
// }

// export default Welcome

// 01 - Componente base usando function

// function Welcome() {
//   return <h1>Bienvenidos a React.js!</h1>
// }

// export default Welcome

// Un componente:
// * Es una función, devuelve JSX, su nombre empieza con mayúscula.

// Partes de una componente
// 1. Imports (si los hay)
// 2. Lógica (varibales, hooks, functiones)
// 3. Return -> jsx
// 4. Export

// Reglas básicas de un componente
// * Un solo elemento padre