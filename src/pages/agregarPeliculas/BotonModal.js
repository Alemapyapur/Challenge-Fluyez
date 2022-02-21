import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMovies } from '../../store/newMovies';

function BotonModal() {
  const [name, setName] = useState("")
  const [date, setDate] = useState()
  const [state, setState] = useState("")
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    if(name){
      dispatch(addMovies({Id: Math.random().toString(36).slice(2), Title: name, Year: date, State: state }))
    }
    // dispatch(addMovies(movie))
  }
  return (
    <div>
      <button className="block text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
        Nueva Pelicula
      </button>

      <div id="defaultModal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
        <div className="relative bg-white rounded-lg px-4 w-full max-w-2xl h-full md:h-auto">

          <form onSubmit={onSubmit} className="m-10 text-black">
            <div className="py-4 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label>Nombre de la Película</label>
              </div>
              <div className="text-black md:w-2/3 md:flex-grow">
                <input value={name} onChange={(e) => setName(e.target.value)} className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline" type="text" placeholder="Ingresa el nombre de la pelicula" required/>
              </div>
            </div>

            <div className="py-4 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label>Fecha de Publicación</label>
              </div>
              <div className="md:w-2/3 md:flex-grow">
                <input value={date} onChange={(e) => setDate(e.target.value)} className="w-full h-10 px-3 text-base placeholder-gray-600  border rounded-lg focus:shadow-outline" type="date" />
              </div>
            </div>

            <div className="py-4 md:flex md:items-center">
              <div className="mb-1 md:mb-0 md:w-1/3">
                <label>Estado</label>
              </div>
              <div className="text-black md:w-2/3 md:flex-grow">
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 border rounded-lg appearance-none focus:shadow-outline" placeholder="Regular input">
                  <option selected>Escoge una opción</option>
                  <option value="activo">Activo</option>
                  <option value="inactivo">Inactivo</option>
                </select>
              </div>
            </div>

            <div className="flex justify-center items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
              <button data-modal-toggle="defaultModal" type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Guardar</button>
              <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600">Cancelar</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default BotonModal