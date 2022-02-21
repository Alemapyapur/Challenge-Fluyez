import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncMoreDetail, getSelectedMovieOrShow, removeSelectedMovieOrShow } from '../../store/moviesStore'

function DetallePeliculas() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getSelectedMovieOrShow);

  console.log(data)

  useEffect(() => {
    dispatch(asyncMoreDetail(imdbID));
    return () => {
      dispatch(removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div>
      <p>Descripción</p>
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
      <div>
        <h3>{data.Title}</h3>
        <div>
          <img src={data.Poster} alt={data.Title} />
        </div>
        <div className="flex justify-start">
          <span>
            IMDB Rating : {data.imdbRating}
          </span>
          <span>
            IMDB Votes :{" "} {data.imdbVotes}
          </span>
          <span>
            Runtime: {data.Runtime}
          </span>
          <span>
            Year : {data.Year}
          </span>
        </div>
        <div>
          <p>{data.Plot}</p>

          {/* <div className="flex justify-start">
            <div>
              <p>Director:</p>
              <p>{data.Director}</p>
            </div>
            <div>
              <p>Director:</p>
              <p>{data.Actors}</p>
            </div>
            <div>
              <p>Director:</p>
              <p>{data.Genre}</p>
            </div>
            <div>
              <p>Director:</p>
              <p>{data.Language}</p>
            </div>
            <div>
              <p>Director:</p>
              <p>{data.Awards}</p>
            </div>
          </div> */}
        </div>
      </div>
      )}
    </div>
  )
}

export default DetallePeliculas