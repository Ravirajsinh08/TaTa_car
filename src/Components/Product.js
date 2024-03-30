import React from 'react'
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nexonpng from '../Images/nexonpng.png';
import harrierpng from  '../Images/harrierpng.png';
import safaripng from '../Images/safaripng.png'
import { CardBody } from 'react-bootstrap';
import Navbg from '../Images/back4.jpg';
import '../Css/Responsive.css';
import '../Css/index.css';

export default function Product() {
  return (
    <>
        <div className='img'>
<img src={Navbg} className='backimg' alt='backimg' />
    </div>
    <div className='productpage' >
<Container>
        <Row className='product-row'>
          <Col xs={6} md={4}>
          <img className='cardimg' src={Nexonpng} alt='Nexonpng'/>
          <CardBody>
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
          <Col xs={6} md={4}>
          <img className='cardimg' src={harrierpng} alt='Harrierpng'/>
          <CardBody>
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
          <Col xs={6} md={4}>
          <img className='cardimg' src={safaripng} alt='Safaripng'/>
            <CardBody>
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
          </Row>
          <Row>
          <Col xs={6} md={4}>
          <img className='cardimg' src={Nexonpng} alt='Nexonpng'/>
            <CardBody>
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
          <Col xs={6} md={4}>
          <img className='cardimg' src={harrierpng} alt='Harrierpng'/>
            <CardBody>
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
          <Col xs={6} md={4}>
          <img className='cardimg' src={safaripng} alt='Safaripng'/>
            <CardBody> 
     <Link  className='btn btn-success ' to="/details" > Order Now</Link>
          </CardBody>

          </Col>
        </Row>
      </Container>
    </div>
</>
  )
};
