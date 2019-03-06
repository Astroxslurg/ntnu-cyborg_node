import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarTop = ({state}) => (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="#home">K³AH</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="carouseltest">Home</Nav.Link>
                    <Nav.Link href="#link">NTNU Cyborg</Nav.Link>
                    <Nav.Link href="#link">Meet The Team</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="#link">Other Projects</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="testtest">Testtest</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </div>
);

export default NavbarTop;