import { Container, Row, Col, Button, Form, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useState, useContext } from 'react';
import { UsuariosContext } from '../../Contexto/UserContext';
import './../InicioDeSesion/styleInicioDeSesion.css'


function InicioDeSesion() {

  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const { usuarios } = useContext(UsuariosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const usuario = usuarios.find((usuario) => usuario.email === email && usuario.contraseña === contraseña);
      console.log(usuario, "usuario");
      if (usuario) {
        localStorage.setItem("usuario", JSON.stringify(usuario));
        window.location.href = "/";
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (

    <Container>
      <br />

      <br />
      <Row>
        <Col></Col>
        <Col><Card border='primary' style={{ width: '25rem' }}>

          {[
            'Primary',
          ].map((variant) => (
            <Card bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}>
              <Card.Header>
                <Row>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col><FontAwesomeIcon icon={faUser} beat style={{ color: "#ffffff", }} /></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                </Row>
              </Card.Header>
            </Card>
          ))}

          <Card.Body>
            <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresar email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="contraseña"
                  value={contraseña}
                  onChange={(e) => setContraseña(e.target.value)}
                  placeholder="Ingresar Contraseña" />
              </Form.Group>

              <Row>
                <Col>
                  <Button variant="primary" type="submit">
                    Iniciar Sesión
                  </Button>
                </Col>
                <Col>
                  <Nav defaultActiveKey="/home" as="ul">
                    <Nav.Item as="li">
                      <Form.Label>
                        Si no posee una cuenta
                        <Nav.Link eventKey="link-1" href="/Registro">
                          ...ir a Registrarse
                        </Nav.Link>
                      </Form.Label>
                    </Nav.Item>
                  </Nav>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card></Col>
        <Col></Col>
      </Row>
      <br />
    </Container>
  );
}

export default InicioDeSesion;
