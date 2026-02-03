import { useEffect, useState } from "react"

import { fetchCharacters } from "../services/characters"

const HomePage = () => {
  // TODO: Listar los personajes(characters) de la api de Rick and Morty y deben mostrar los campos: image, id, name, species, location
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    fetchCharacters()
      .then(data => setCharacters(data.results))
  }, [])

  return (
    <main className="m-4">
      <h1 className="text-3xl font-bold text-center">Home page - Characters</h1>

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {characters.map(character => {
          return (
            <article
              key={character.id}
              className="bg-yellow-300 rounded-lg p-4 flex flex-col justify-evenly items-center"
            >
              <img src={character.image} width={100} />
              <div className="font-bold text-xl">#{character.id}</div>
              <div className="font-bold text-3xl">{character.name}</div>
              <div className="font-bold bg-orange-300 text-slate-800 p-2 rounded-lg uppercase">{character.species}</div>
              <div className="font-bold">{character.location.name}</div>
            </article>
          )
        })}
      </section>
    </main>
  )
}

export default HomePage