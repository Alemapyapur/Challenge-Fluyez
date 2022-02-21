import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncMovies, asyncShows } from '../../store/moviesStore';
import ListaPeliculas from './ListaPeliculas';
import BotonModal from './BotonModal'
// import ModalPelicula from './ModalPelicula';

function AgregarPeliculas() {

  // const [modal, setModal] = useState(false)

  const dispatch = useDispatch();
  const movieText = "Harry Potter";
  const showText = "Stranger";

  useEffect(() => {
    dispatch(asyncMovies(movieText));
    dispatch(asyncShows(showText));
  }, [dispatch]);

  return (
    <section className="mx-10 py-6 capitalize">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Administrador</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Agregar Pelicula</li>
        </ol>
      </nav>

      <div className="text-white flex justify-between items-center ">
        <h2 className="text-left text-xl pt-8 pb-4">Películas</h2>
        <BotonModal />
      </div>

      {/* <button onClick={() => setModal(!modal)} className="block text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" >
        Nueva Pelicula
      </button>
      <div className="flex ml-64 bg-white w-3/6 rounded-lg">
        <ModalPelicula modal={modal} setModal={setModal} />
      </div> */}

      <ListaPeliculas />

    </section>
  )
}

export default AgregarPeliculas