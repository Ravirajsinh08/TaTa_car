import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import '../Css/index.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Logo from '../Images/TATAlogo.png';
import { faHome, faShoppingCart, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  return (
    <div>
      <Navbar expand="lg" className='nav sticky-top'>

        <Navbar.Brand>
          <img 
            src={Logo}
            className="d-inline-block align-top"
            alt="TATA logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Link  className='btn icons' to="/">
              <FontAwesomeIcon icon={faHome} /> </Link>

            <Link  className='btn icons' to="/Product">
              <FontAwesomeIcon icon={faShoppingCart}  /> </Link>

            <Link  className='btn icons' to="/About">
              <FontAwesomeIcon icon={faInfoCircle}  /> </Link>

            {/* <Link  className='btn' to="/More">More</Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    </div>

  )
}
