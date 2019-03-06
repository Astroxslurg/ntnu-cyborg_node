import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'


const DynamicPlot = dynamic(import('../components/plot'), {
    ssr: false
});

const Index = ({ state }) => (
  <div>
    <DynamicPlot/>
  </div>
);

export default Index;
