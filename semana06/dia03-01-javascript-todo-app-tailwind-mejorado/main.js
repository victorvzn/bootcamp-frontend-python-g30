const taskInput = document.querySelector('.task__input')
const taskClear = document.querySelector('.task__clear')
const taskList = document.querySelector('.task__list')

// TODO - 01 Al presionar enter en la caja de texto debemos agregr una nueva tarea a la lista

taskInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    // Lógica para agregar una nueva tarea

    // const value = event.target.value
    const { value } = event.target // target es un objeto

    console.log(value)
  }
})