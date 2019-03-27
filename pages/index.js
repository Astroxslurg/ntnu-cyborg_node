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
    <div className="row mt-1 mb-4">
      <div className="col-8">
        <CircleVisualisation className="dynPlot" />
      </div>
      <div className="col-4 mt-5">
        <p>Kristian pls explain</p>
      </div>
    </div>
    <div className="row">
      <div className="col-4 mt-5">
        <p>Here we can see a plot of one of the 60 electrodes on the MEA.</p>
      </div>
      <div className="col-8">
        <DynamicPlot />
      </div>
    </div>
  </div>
);

const Index = ({ state }) => (
  <div>
    <ContentRow />
  </div>
);

export default Index;
