import { Container, Image, Card, Row, Col } from 'react-bootstrap';

const Nosotros = () => {
  return (
    <div className='AboutUs'>
      {/* Banner */}
      <div className="banner bg-success d-flex align-items-center justify-content-center">
        <Image src="/public/logo_RHR.jpg" alt="Banner" className="img-fluid banner-image" style={{ maxWidth: '20%', height: 'auto' }} />
      </div>
      <Container>
      <Row className="text-center my-4">
          <Col md={{ span: 8, offset: 2 }}>
            <h1 className="display-4">
              ¡Bienvenidos a Rolling Hotel&Resort!
            </h1>
            <p className="lead">
              Somos un equipo de jóvenes y apasionados programadores  que creamos y desarrollamos una página de gestión hotelera. Nuestra plataforma ofrece un servicio de autogestión y reservas para el público general. Simplifica tus operaciones y mejora la experiencia de tus clientes con Rolling Hotel&Resort.
            </p>
          </Col>
        </Row>

        <div className="row text-center mt-3">
          <div className="col-12">
            <br />
            <hr />

            <h3 className="mb-4 mt-6">Conoce a nuestro equipo</h3>
          </div>
        </div>

        {/* Cards de los integrantes */}
        <Row className="justify-content-between mb-4">
          <Col md={5} className="mb-4">
            <Card className="shadow">
              <Card.Img
                src="https://media.istockphoto.com/id/1384874531/es/vector/silueta-de-hombre-de-traje-avatar-no-identificado.jpg?s=612x612&w=0&k=20&c=9vuS9E6RA0ZM0oOSxD0zVaxc6DvDwwDCrtYFJrq4sMU="
                alt="Juan Ignacio Luquez"
                className="card-img-top"
                style={{ maxWidth: '80%', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Juan Ignacio Luquez</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="shadow">
              <Card.Img
                src="https://media.istockphoto.com/id/1384874531/es/vector/silueta-de-hombre-de-traje-avatar-no-identificado.jpg?s=612x612&w=0&k=20&c=9vuS9E6RA0ZM0oOSxD0zVaxc6DvDwwDCrtYFJrq4sMU="
                alt="Luis Fabian Alvarez"
                className="card-img-top"
                style={{ maxWidth: '80%', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Luis Fabian Alvarez</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="justify-content-between">
          <Col md={5} className="mb-4">
            <Card className="shadow">
              <Card.Img
                src="https://media.istockphoto.com/id/1384874531/es/vector/silueta-de-hombre-de-traje-avatar-no-identificado.jpg?s=612x612&w=0&k=20&c=9vuS9E6RA0ZM0oOSxD0zVaxc6DvDwwDCrtYFJrq4sMU="
                alt="Ana Gallardini"
                className="card-img-top"
                style={{ maxWidth: '80%', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Ana Gallardini</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col md={5} className="mb-4">
            <Card className="shadow">
              <Card.Img
                src="https://media.istockphoto.com/id/1384874531/es/vector/silueta-de-hombre-de-traje-avatar-no-identificado.jpg?s=612x612&w=0&k=20&c=9vuS9E6RA0ZM0oOSxD0zVaxc6DvDwwDCrtYFJrq4sMU="
                alt="Nicolas"
                className="card-img-top"
                style={{ maxWidth: '80%', height: 'auto' }}
              />
              <Card.Body>
                <Card.Title>Nicolas</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  )
}

export default Nosotros;


