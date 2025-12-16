const taskInput = document.getElementById('taskInput')
const taskAdd = document.querySelector('.task__add')
const taskList = document.querySelector('.task__list')

console.log(taskList)

// EVENTOS

// ELEMENTO.addEventListener(NOMBRE_EVENTO, CALLBACK)

// CALLBACK: Es una función que usamos como parámetro de otras funciones.

taskAdd.addEventListener('click', function(event) {
  // Se ejecutará cuando hagamos click en el botón 'Añadir tarea'
  console.log('Click!', taskInput.value)

  // MANEJO DEL DOM: Forma de crear elementos dinámicamente con el DOM de Javascript
  // const button = document.createElement('button') // <button></button>
  // button.textContent = 'Hola soy un botón'
  // console.log(button)
  // document.body.appendChild(button)

  // DONE: 01 Añadir el elemento li al elemento con la clase task__list
  const li = document.createElement('li')

  // TODO: 02 Añadir el elemento span al elemento li
  // TODO: 03 Añadir el elemento button al elemento li
  
  li.textContent = 'hola a todos'

  taskList.appendChild(li)
})