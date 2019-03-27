import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//343a40
const NavbarTop = ({ state }) => (
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <a href="index">
          <img className="image" src="static/EiT_Logo2.png" />
        </a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="index">Home</Nav.Link>
          <Nav.Link href="cyborg">NTNU Cyborg</Nav.Link>
          <Nav.Link href="about"> About</Nav.Link>
          <Nav.Link href="other"> Other Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarTop;
