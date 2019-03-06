import React from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
    ssr: false
})

const Index = ({ state }) => (
  <div>
    <p>visualisering, om oss, prosjektet/ntnu cyborg, andre prosjekter</p>
    <a href="testtest">testtest</a>

    <DynamicPlot/>
  </div>
);


export default Index;
