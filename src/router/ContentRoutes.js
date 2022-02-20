import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

export const ContentRoutes = () => {
  return (
    <Routes>
      {/* Ejemplo */}
      {/* <Route path="/prueba/1" element={<Vista content={<Registro/>}/>} /> */}

      <Route path="/" element={<Layout/>}>
        <Route path="/prueba/1" />
        <Route path="/prueba/1" />
        <Route path="/prueba/1" />
      </Route>

    </Routes>
  )
}
