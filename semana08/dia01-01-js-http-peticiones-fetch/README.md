# Asincronía

### Asincronía en JS

JS no espera a que algo lento termine

```js
console.log('Empezando mi programa')

setTimeout(() => {
  console.log('Esta línea tardará 2 segundos o 20000 ms')
}, 2000); // 

console.log('Fin de mi programa')


Empezando mi programa
Fin de mi programa
Esta línea tardará 2 segundos o 20000 ms
```

### API

