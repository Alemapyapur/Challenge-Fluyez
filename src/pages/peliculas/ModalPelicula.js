import React from 'react'

function ModalPelicula() {
  return (
    <section>
      <form className="m-10">
        <div className="py-4 md:flex md:items-center">
          <div className="text-white mb-1 md:mb-0 md:w-1/3">
            <label>Nombre de la Película</label>
          </div>
          <div className="text-black md:w-2/3 md:flex-grow">
            <input className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Ingresa el nombre de la pelicula" />
          </div>
        </div>

        <div className="py-4 md:flex md:items-center">
          <div className="text-white mb-1 md:mb-0 md:w-1/3">
            <label>Fecha de Publicación</label>
          </div>
          <div className="md:w-2/3 md:flex-grow">
            <input className="w-full h-10 px-3 text-base placeholder-gray-600  border rounded-lg focus:shadow-outline" type="date" />
          </div>
        </div>

        <div className="py-4 md:flex md:items-center">
          <div className="text-white mb-1 md:mb-0 md:w-1/3">
            <label>Estado</label>
          </div>
          <div className="text-black md:w-2/3 md:flex-grow">
            <select className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
              <option selected>Escoge una opción</option>
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>

            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
            </div>
          </div>
        </div>

        <button type="button" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Guardar</button>
      </form>
    </section>
  )
}

export default ModalPelicula