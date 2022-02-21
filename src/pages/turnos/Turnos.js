import TablaTurnos from './TablaTurnos';

function Turnos() {
  return (
    <section className="mx-10 py-6 text-white capitalize">
      <nav aria-label="breadcrumb">
        <ol className="flex leading-none text-lg text-indigo-600 divide-x divide-indigo-400">
          <li className="pr-4"><a href="ww">Turnos</a></li>
          <li className="px-4 text-gray-700" aria-current="page">Tarde</li>
        </ol>
      </nav>

      <h2 className="text-left text-xl pt-8">Relacion de encargados y turnos de trabajo</h2>
      <TablaTurnos/>
    </section>
  )
}

export default Turnos