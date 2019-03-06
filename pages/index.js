import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const MyNavbar = ({state}) => (
    <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">K³AH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">NTNU Cyborg</Nav.Link>
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


const Index = ({ state }) => (
  <div>

      <MyNavbar />
    <p>visualisering, om oss, prosjektet/ntnu cyborg, andre prosjekter</p>
    <img src="http://images5.fanpop.com/image/photos/31000000/haters-gonna-hate-random-31076705-550-413.jpg" />
    <p>This is image</p>
    <h2>This is a header written hekk yeh</h2>
    <a href="testtest">testtest</a>


  </div>
);


export default Index;
