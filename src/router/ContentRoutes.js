import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import { Administrador, Peliculas, Perfil, Turnos } from '../pages'

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Peliculas/>} />
        <Route path="peliculas" element={<Peliculas/>} />
        <Route path="turnos" element={<Turnos/>} />
        <Route path="administrador" element={<Administrador/>} />
        <Route path="perfil" element={<Perfil/>} />
      </Route>

    </Routes>
  )
}
