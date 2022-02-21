import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncShows, getAllShows } from '../../store/moviesStore';
import PeliculasSeries from './PeliculasSeries';

function SeriesSearch() {
  const shows = useSelector(getAllShows);
  const dispatch = useDispatch();
  const showText = "Horror";

  useEffect(() => {
    dispatch(asyncShows(showText));
  }, [dispatch]);

  let renderShows = "";

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <PeliculasSeries key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{shows.Error}</h3>
    </div>
  );
  return (
    <section className="mx-10 py-6 text-white capitalize">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Series</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Buscador de Series</li>
        </ol>
      </nav>
      <div>
        <h2 className="text-left text-xl py-8">Busca tus series favoritas</h2>
        <div className="grid grid-cols-4 gap-4">
          {renderShows}
        </div>
      </div>
    </section>
  )
}

export default SeriesSearch