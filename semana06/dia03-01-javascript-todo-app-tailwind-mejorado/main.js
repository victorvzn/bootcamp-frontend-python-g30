const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

let tasks = [
  {
    id: 'tarea-1',
    title: 'Estudiar javascript',
    completed: false
  },
  {
    id: 'tarea-2',
    title: 'Salir al receso',
    completed: true
  },
  {
    id: 'tarea-3',
    title: 'Resolver el reto de la semana',
    completed: false
  }
]


// TODO - 01 Al presionar enter en la caja de texto debemos agregr una nueva tarea a la lista

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Lógica para agregar una nueva tarea

    // const value = event.target.value
    const { value } = event.target // target es un objeto

    console.log(value)
  }
})