import Carousel from 'react-bootstrap/Carousel';
import './../Carrusel/stylecarrusel.css';

import { useState } from 'react';
import Formulario from '../Reserva/Formulario';

function Carrusel() {


    //Abrir Modal
    const [show, setShow] = useState(false);

    return (
      <>
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Frente hotel.jpg'
            alt='Primer slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />

        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Habitacion hotel.jpg'
            alt='Segundo slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src='src\assets\img\Restaurante hotel.jpeg'
            alt='Tercer slider'
          />
          <Carousel.Caption>
          <Formulario show={show} onHide={() => setShow(false)} />
        </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>  
    );
  }
  
  export default Carrusel;
