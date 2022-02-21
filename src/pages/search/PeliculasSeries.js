import React from 'react'
import { Link } from 'react-router-dom';

function PeliculasSeries(props) {
  const { data } = props;
  return (
    <section className="mx-8 text-white capitalize w-52 h-96 cards">
      <div className="rounded-lg shadow-lg p-3 bg-slate-800">
        <Link to={`/movie/${data.imdbID}`} className="flex justify-center items-center my-4">
           {/* <Link to="/"> */}
          <img className="rounded-lg h-52" src={data.Poster} alt="{data.Title}" />
        </Link>
        <div className="py-4 flex flex-col">
          <h5 className="text-white text-base text-center font-medium mb-2">{data.Title}</h5>
          <div className="text-xs text-center text-white">
            <p>{data.Type}</p>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PeliculasSeries