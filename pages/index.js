import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import CircleVisualisation from '../components/circle-visualisation';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../src/styles/default.css';

import { Column, Row } from 'simple-flexbox';

const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false,
});

const ContentRow = ({ state }) => (
  <div>
    <div className="row">
      <div className="col-md-8" className="dynPlot">
        <DynamicPlot />
      </div>
      <div className="col-md-4 mt-5 ml-5">
        Here we can see a plot of one of the 60 electrodes on the
        nervecellsboards (mea?) ffjdlasjfkldjaflkdj afjldksajflødakfjdølafkjda{' '}
      </div>
    </div>
    <div className="row">
      <div className="col-md-4 mt-5 ml-5">
        <p>hei</p>
      </div>
      <div className="col-md-8">
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
