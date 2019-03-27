import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import CircleVisualisation from '../components/circle-visualisation';
import '../src/styles/default.css';

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false,
});

const ContentRow = ({ state }) => (
  <div>
    <div className="row mt-1">
      <div className="col-9">
        <DynamicPlot />
      </div>
      <div className="col-3">
        Here we can see a plot of one of the 60 electrodes on the MEA.
      </div>
    </div>
    <div className="row">
      <div className="col-3 ">
        <p>Another plot!</p>
      </div>
      <div className="col-9">
        <DynamicPlot />
      </div>
    </div>
  </div>
);

const Index = ({ state }) => (
  <div>
    <h1>Welcome</h1>
    <p>This is text</p>
    <DynamicPlot />
    <p>This is plot</p>

    <h2>This is a header written hekk yeh</h2>
    <a href="testtest">testtest</a>
    <CircleVisualisation />
    <ContentRow />
  </div>
);

export default Index;
