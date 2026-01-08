const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url)
//   .then(respuesta => respuesta.json())
//   .then(data => {
//     console.log(data)
//     renderTodos(data)
//   })
//   .catch(error => {
//     console.log(error)
//   })

const fetchUsersSinRetorno = async () => {
  const response = await fetch(url)

  const data = await response.json()

  console.log(data)
}

// fetchUsersSinRetorno()

// console.log(fetchUsersSinRetorno()) // Promise {<pending>}

const fetchUsersConnRetorno = async () => {  // Retorna una promesa (Promise)
  const response = await fetch(url)

  return await response.json()
}

fetchUsersConnRetorno() // Retorna una promesa
  .then(users => console.log(users))


