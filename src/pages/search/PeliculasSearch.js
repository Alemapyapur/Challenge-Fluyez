import { useDispatch, useSelector } from 'react-redux';
import { asyncMovies, getAllMovies } from '../../store/moviesStore';
// import Slider from 'react-slick';
// import { SettingSlick } from '../../services/settingSlick';
import { useEffect } from 'react';
import PeliculasSeries from './PeliculasSeries';

function PeliculasSearch() {
  const movies = useSelector(getAllMovies);
  // const shows = useSelector(getAllShows);
  const dispatch = useDispatch();
  const movieText = "Feliz";
  // const showText = "Stranger";

  useEffect(() => {
    dispatch(asyncMovies(movieText));
    // dispatch(asyncShows(showText));
  }, [dispatch]);

  let renderMovies = "";
  // let renderShows = "";
  // console.log(movies)

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <PeliculasSeries key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{movies.Error}</h3>
    </div>
  );

  // renderShows = shows.Response === "True" ? (
  //   shows.Search.map((movie, index) => (
  //     <PeliculasSearch key={index} data={movie} />
  //   ))
  // ) : (
  //   <div className="text-lg text-red-600 ">
  //     <h3>{shows.Error}</h3>
  //   </div>
  // );


  return (
    <section className="mx-10 py-6 text-white capitalize">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Pelicula</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Buscador de peliculas</li>
        </ol>
      </nav>
      <div>
        <h2 className="text-left text-xl py-8">Busca tus peliculas favoritas</h2>
        <div className="grid grid-cols-4 gap-4">
          {renderMovies}
        </div>
      </div>
    </section>
  )
}

export default PeliculasSearch