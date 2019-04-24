import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import Visualisation from '../components/visualisation';
import '../src/styles/default.css';
import MartiniusPlot from '../components/martiniusPlot';

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false,
});

const ContentRow = ({ state }) => (
  <div>
    <div className="row mt-1 mb-4">
      <div className="col-6">
        <Visualisation className="dynPlot" />
      </div>
      <div className="col-6 mt-5">
        <h1>Circle Plot</h1>
        <p>
          This plot shows all the available datapoints as colored dots inside a
          circle. Each angular segment represents one sensor, the color
          represents the sample timestamp, and the distance from the center to
          dot represents its absolute value.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-4 mt-5">
        <h1>Timeseries Representation</h1>
        <p>
          Here we see a plot of one of the 60 electrodes on the MEA. Along the
          y-axis we see the measured voltage on the electrode in pico-volts and
          along the x-axis we see the time passed in milli-seconds.
        </p>
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
