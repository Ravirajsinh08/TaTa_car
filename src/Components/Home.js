import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Nexon from '../Images/nexon-dark.webp'; 
import Harrier from '../Images/harrierimg.webp';
import Safari from '../Images/safariimg.webp';
import '../Css/Responsive.css';
import '../Css/index.css';

export default function Home() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className='cursolimg' src={Nexon} alt="First slide" /> {/* Use the imported image */}
        <Carousel.Caption>
          <h3>Nexon #DARK</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='cursolimg' src={Harrier} alt="Second slide" /> {/* Use the imported image */}
        <Carousel.Caption>
          <h3>Harrier #DARK</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='cursolimg' src={Safari} alt="Third slide" /> {/* Use the imported image */}
        <Carousel.Caption>
          <h3>Safari #DARK</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
