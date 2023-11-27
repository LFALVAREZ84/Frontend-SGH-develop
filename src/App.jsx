import Navegador from './Componentes/Navegador/Navegador'
import PiedePagina from './Componentes/PiedePagina/Piedepagina';
import UserContext from './Contexto/UserContext';
import ContextoDeInventario from './Contexto/ContextoDeInventario';
import Rutas from './Rutas/Rutas';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/App.css'


function App() {
  
  return (
    <>
      <UserContext>
        <ContextoDeInventario>
          <Navegador />
          <Rutas />
          <PiedePagina />
        </ContextoDeInventario>
      </UserContext>
    </>
  );
}

export default App
