// Asincronía

// JS no espera a que algo lento termine
// JS sigue ejecutando mientras algo se procesa en segundo plano

console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 20000 ms')
}, 2000); // 

console.log('Fin de mi programa')

