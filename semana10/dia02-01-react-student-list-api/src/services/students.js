// Aquí añadiremos las funciones necesarias para interactuar con el API

const API_URL = 'https://697828f05b9c0aed1e882a5d.mockapi.io/v1'

export const fetchStudents = async () => {
  const response = await fetch(`${API_URL}/students`)
  
  return await response.json()
}