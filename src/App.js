import './App.css';
import 'flowbite';
import { BrowserRouter } from 'react-router-dom';
import { ContentRoutes } from './router/ContentRoutes';

function App() {
  return (
    <BrowserRouter>
      <ContentRoutes />
    </BrowserRouter>
  );
}

export default App;
