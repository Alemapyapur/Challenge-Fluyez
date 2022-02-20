import { Routes, Route, Outlet } from 'react-router-dom'
import { Peliculas, Turnos, Administrador } from '../../pages'
import Inicio from '../../pages/inicio/Inicio'
import Buscador from './Buscador'
import Footer from './Footer'

function Content() {
  return (
    <div className="bg-slate-900 w-5/6">
      <Buscador />
      <Inicio />
      <Peliculas />
      <div>
        <Outlet />
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Content