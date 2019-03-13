import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//343a40
const NavbarTop = ({ state }) => (
  <div>
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="index">K³AH</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="index">Hfdskafjdlajome</Nav.Link>
          <Nav.Link href="cyborg">NTNU Cyborg</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="other">Other Projects</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default NavbarTop;
