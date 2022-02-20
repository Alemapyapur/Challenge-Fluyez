import './App.css';
import Layout from './components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Peliculas, Turnos, Administrador } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
