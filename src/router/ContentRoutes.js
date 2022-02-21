import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { AgregarPeliculas, Perfil, Turnos, Inicio, PeliculasSearch, SeriesSearch } from '../pages'
import DetallePeliculas from '../pages/agregarPeliculas/DetallePeliculas'

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Inicio/>} />
        <Route path="peliculas" element={<PeliculasSearch/>} />
        <Route path="series" element={<SeriesSearch/>} />
        <Route path="turnos" element={<Turnos/>} />
        <Route path="administrador" element={<AgregarPeliculas/>} />
        <Route path="perfil" element={<Perfil/>} />
        {/* verificar, action en Store */}
        <Route path="movie/:imdbID" elemen={<DetallePeliculas/>} />
      </Route>
    </Routes>
  )
}
