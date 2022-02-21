import { useDispatch, useSelector } from 'react-redux';
import { asyncMovies, asyncShows, getAllMovies, getAllShows } from '../../store/moviesStore';
import Slider from 'react-slick';
import { SettingSlick } from '../../services/settingSlick';
import Recomendado from './Recomendado';
import { useEffect } from 'react';

function Peliculas() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const dispatch = useDispatch();
  const movieText = "Harry Potter";
  const showText = "Stranger";

  useEffect(() => {
    dispatch(asyncMovies(movieText));
    dispatch(asyncShows(showText));
  }, [dispatch]);

  let renderMovies = "";
  let renderShows = "";
  console.log(movies)

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <Recomendado key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{movies.Error}</h3>
    </div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <Recomendado key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{shows.Error}</h3>
    </div>
  );


  return (
    <section className="mx-10 py-6 text-white capitalize contenedor">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Inicio</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Recomendados</li>
        </ol>
      </nav>
      {/* RECOMENDADOS */}
      <div>
        <h2 className="text-left text-xl py-8">recomendados para tí</h2>

        {/* <div className="grid grid-cols-4 gap-4">
          {renderMovies}
        </div> */}
        <div>
          <Slider {...SettingSlick}>{renderMovies}</Slider>
        </div>

        {/* LAS MAS VISTAS */}
        <div className="my-10">
          <h2 className="text-left text-xl py-8">las mas vistas</h2>

          {/* <div className="grid grid-cols-4 gap-4">
            {renderShows}
          </div> */}
          <div>
            <Slider {...SettingSlick}>{renderShows}</Slider>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Peliculas