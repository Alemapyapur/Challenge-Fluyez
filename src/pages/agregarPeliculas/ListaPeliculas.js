import { useSelector } from "react-redux"
import TablaPeliculas from "./TablaPeliculas"

function ListaPeliculas() {
  const newMovies = useSelector((state) => state.newMovies.movies)

  console.log(newMovies)
  return (
    <section>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
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
                  {newMovies.map((item, index) => (
                    <TablaPeliculas key={index} data={item} />
                  ))}

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