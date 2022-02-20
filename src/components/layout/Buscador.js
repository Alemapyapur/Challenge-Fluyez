import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncMovies, asyncShows } from '../../store/moviesStore'

function Buscador() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Ingresa un nombre correcto");
    dispatch(asyncMovies(term));
    dispatch(asyncShows(term));
    setTerm("");
  };

  return (
    <section className="my-4">
      <div className="p-4">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Busca peliculas o series"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="px-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path fill="none" d="M0 0h24v24H0z" /><path d="M18.031 16.617l4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z" fill="rgba(255,255,255,1)" /></svg>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Buscador