import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import Visualisation from '../components/visualisation';

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false,
});

const Index = ({ state }) => (
  <div>
    <h1>Welcome</h1>
    <p>This is text</p>
    <DynamicPlot />
    <p>This is plot</p>

    <h2>This is a header written hekk yeh</h2>
    <a href="testtest">testtest</a>
    <Visualisation />
  </div>
);

export default Index;
