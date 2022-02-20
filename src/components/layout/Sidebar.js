import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="static w-1/6 bg-slate-800 h-screen text-xs text-left">
      <ul className="uppercase m-4 text-white">
        <li className="uppercase py-2 hover:text-cyan-500">dashboard</li>
        <li className="uppercase py-2 hover:text-cyan-500">películas</li>
        <li className="uppercase py-2 hover:text-cyan-500">turnos</li>
        <li className="uppercase py-2 hover:text-cyan-500">administradores</li>
        <li className="uppercase py-2 hover:text-cyan-500">perfil</li>
        <li className="uppercase py-2 hover:text-cyan-500">cerrar sesión</li>
        <li className="uppercase py-2 ">
          <span className="hover:text-cyan-500">películas</span>
          <ul className="ml-2">
            <li className="py-2 hover:text-cyan-500">
              discover
            </li>
            <li className="py-2 hover:text-cyan-500">
              tv & movies
            </li>
            <li className="py-2 hover:text-cyan-500">
              popular clips
            </li>
            <li className="py-2 hover:text-cyan-500">
              watch later
            </li>
          </ul>
        </li>

        <li className="capitalize py-2 ">
          <span className="uppercase hover:text-cyan-500">categorías</span>
          <ul className="ml-2">
            <li className="py-1 hover:text-cyan-500">
              kuwait tv
            </li>
            <li className="py-1 hover:text-cyan-500">
              free shows
            </li>
            <li className="py-1 hover:text-cyan-500">
              arábica
            </li>
            <li className="py-1 hover:text-cyan-500">
              acción
            </li>
            <li className="py-1 hover:text-cyan-500">
              comedia
            </li>
            <li className="py-1 hover:text-cyan-500">
              drama
            </li>
            <li className="py-1 hover:text-cyan-500">
              horror
            </li>
            <li className="py-1 hover:text-cyan-500">
              kids
            </li>
            <li className="py-1 hover:text-cyan-500">
              musicales
            </li>
            {/* <li className="py-1 hover:text-cyan-500">
              tv shows
            </li>
            <li className="py-1 hover:text-cyan-500">
              thriller
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar