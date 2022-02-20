import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Breadcrumbs from '../../components/common/Breadcrumbs'
import { asyncMovies, asyncShows } from '../../store/moviesStore';
import ListaPeliculas from './ListaPeliculas';

function Peliculas() {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(asyncMovies(movieText));
    dispatch(asyncShows(showText));
  }, [dispatch]);

  return (
    <section className="m-10">
      <Breadcrumbs />

      <div className="text-white flex justify-between items-center my-4 ">
        <h2 className="flex justify-start uppercase">películas</h2>
        <button className="h-10 px-5 text-indigo-700 transition-colors duration-150 border border-indigo-500 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100">
          Nueva Película
        </button>
      </div>

      <ListaPeliculas />

    </section>
  )
}

export default Peliculas