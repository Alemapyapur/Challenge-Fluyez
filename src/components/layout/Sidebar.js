import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className="relative w-1/6 bg-slate-800 h-screen h-full text-xs text-left">
      <ul className="uppercase m-4 text-white">
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/">inicio</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/peliculas">peliculas</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/series">series</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/turnos">turnos</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/administrador">administrador</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          <Link to="/perfil">perfil</Link>
        </li>
        <li className="uppercase py-2 hover:text-cyan-500">
          cerrar sesión
        </li>
      </ul>
    </div>
  )
}

export default Sidebar