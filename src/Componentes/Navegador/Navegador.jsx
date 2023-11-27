import { Container, Col, Nav, Navbar, Image } from 'react-bootstrap';
import { useContext } from 'react';
import { UsuariosContext } from '../../Contexto/UserContext'; 

import './../Navegador/styleNavegador.css';

const Navegador = () => {

  const {cerrarSesion} = useContext(UsuariosContext)

  const usuario = JSON.parse(localStorage.getItem("usuario"))

  return (

    <Navbar expand="lg" className='text-center text-white'>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="mx-auto" style={{ maxHeight: '200px' }} navbarScroll>           
              { usuario ? 
              <Nav.Link className='action' href="/"><b>¡Bienvenido </b>
              <Col>
              <b>{usuario.nombre}!</b>
              </Col>
              </Nav.Link> : null} 
              { usuario ? (
              <Nav.Link className='action' href="/InicioDeSesion" onClick={cerrarSesion}>Cerrar Sesion</Nav.Link>
              ) : (
              <> 
              <Nav.Link className='action' href="/InicioDeSesion">Iniciar Sesion</Nav.Link>
              <Nav.Link className='action' href="/Registro">Registrarse</Nav.Link>
              </>
              )}
              <>
              { usuario ? ( usuario.nombre === 'Admin' ? (
              <Nav.Link className='action' href="/Administrador">Panel de
                <Col>Administrador</Col> </Nav.Link>):(
              <Nav.Link className='action' href="/Cliente">Reservas</Nav.Link>
              
                )) : (
                  <a className='action' href="/" style={{ paddingBlock: '0px' }} ></a>
                )}
              </>
              <Nav.Link className='action' href="/" style={{ paddingBlock: '0px' }} >
              <Image src="src\assets\img\Logo Hotel.jpg"  rounded /></Nav.Link>
            <Nav.Link className='action' href="/ContactoClientes">Contacto</Nav.Link>
            <Nav.Link className='action' href="/Nosotros">Nosotros</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;