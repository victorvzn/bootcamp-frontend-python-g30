const App = () => {
  return (
    <main className="w-96 mx-auto border border-slate-400 rounded-lg mt-6 p-3">
      <h1 className="text-2xl text-center text-slate-700 font-bold">Student list</h1>

      <form>
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            placeholder="Ex. Victor Villazón"
          />
        </label>

        <label>
          <span>City</span>
          <input
            type="text"
            name="city"
            placeholder="Ex. Chiclayo"
          />
        </label>

        <div>
          <input
            type="submit"
            value="Save"
          />
          <input
            type="reset"
            value="Limpiar"
          />
        </div>
      </form>

      <section>
        <div>
          iMAGEN
          <div>NAME</div>
          <div>CITY</div>
          <div>
            <button>✏</button>
            <button>❌</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App