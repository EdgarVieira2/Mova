import React from 'react';
import {
    Nav,
  Navbar
} from 'react-bootstrap';
import './NavBar.css'

import logo from './footer_mova.svg';



const Menu = () => {
    return (
      <Navbar fixed="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand >
      <img
        src={logo}
       
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
           
          </Nav>
          <Nav className="mr-auto" id="right">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  
    );
  
  }
  
  export default Menu;