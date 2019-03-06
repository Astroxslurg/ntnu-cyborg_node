
import React from 'react';
import dynamic from 'next/dynamic'

const DynamicPlot = dynamic(import('../components/plot'), {
    ssr: false
})

const Testtest = ({ state }) => (
  <div>
    <h1>Welcome</h1>
    <DynamicPlot/>
    <h2>This is a header written hekk yeh</h2>
  </div>
);

export default Testtest;
