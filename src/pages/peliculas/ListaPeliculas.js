import { useSelector } from "react-redux"
import { getAllMovies, getAllShows } from "../../store/moviesStore";
import TablaPeliculas from "./TablaPeliculas";

function ListaPeliculas() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);

  let renderMovies = "";
  let renderShows = "";

  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie, index) => (
      <TablaPeliculas key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{movies.Error}</h3>
    </div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie, index) => (
      <TablaPeliculas key={index} data={movie} />
    ))
  ) : (
    <div className="text-lg text-red-600 ">
      <h3>{shows.Error}</h3>
    </div>
  );

  return (
    <section>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <div>
                <table className="min-w-full border text-center text-white">
                  <thead className="border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        ID
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        Nombre
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        F. Publicación
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        Estado
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r"></th>
                    </tr>
                  </thead>
                  <>
                    {renderMovies}
                  </>
                </table>
              </div>

              <div className="mt-10">
                <table className="min-w-full border text-center text-white">
                  <thead className="border-b">
                    <tr>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        ID
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        Nombre
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        F. Publicación
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r">
                        Estado
                      </th>
                      <th scope="col" className="text-sm font-medium px-6 py-4 border-r"></th>
                    </tr>
                  </thead>
                  <>
                    {renderShows}
                  </>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default ListaPeliculas