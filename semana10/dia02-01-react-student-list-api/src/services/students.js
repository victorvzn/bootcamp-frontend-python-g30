// Aquí añadiremos las funciones necesarias para interactuar con el API

const API_URL = 'https://697828f05b9c0aed1e882a5d.mockapi.io/v1'

export const fetchStudents = async () => {
  const response = await fetch(`${API_URL}/students`)
  
  return await response.json()
}

// Crearemos una petición del tipo POST para el endpoint /students
export const createStudent = async (payload) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Mimetypes
    },
    body: JSON.stringify(payload) // Tiene que ir en formato de texto
  }

  const response = await fetch(`${API_URL}/students`, options)

  return await response.json()
}