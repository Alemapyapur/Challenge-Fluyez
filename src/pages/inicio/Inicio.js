import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../store/moviesStore';
import Slider from 'react-slick';
import { SettingSlick } from '../../services/settingSlick';
import Recomendado from './Recomendado';

function Inicio() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

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
    <section className="mx-10 text-white capitalize">
      {/* RECOMENDADOS */}
      <div>
        <h2 className="text-left text-xl py-10">recomendados para tí</h2>

        <div className="grid grid-cols-4 gap-4">
          {renderMovies}
        </div>
        <div className="flex justify-between">
          <Slider {...SettingSlick}>{renderMovies}</Slider>
        </div>

        {/* LAS MAS VISTAS */}
        <div className="my-10">
          <h2 className="text-left text-xl py-10">las mas vistas</h2>

          <div className="grid grid-cols-4 gap-4">
            {renderShows}
          </div>
          <div className="flex">
            <Slider {...SettingSlick}>{renderShows}</Slider>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Inicio