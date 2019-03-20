import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../src/styles/default.css';

import { Column, Row } from 'simple-flexbox';

const onChange = () => true;
const onClickItem = () => true;
const onClickThumb = () => true;

const MyCarousel = ({ state }) => (
  <Carousel
    showArrows={true}
    //emulateTouch
    //width="400"
    onChange={onChange}
    //centerMode={true}
    intiniteLoop={true}
    onClickThumb={onClickThumb}
    onClickItem={onClickItem}>
    >
    <div>
      <DynamicPlot />
      <p className="legend">yoyo</p>
    </div>
    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
      <p className="legend">sup?</p>
    </div>
    <div>
      <div
        style={{
          display: 'inline-block',
          pointerEvents: 'none',
          backgroundColor: '#ff0044',
        }}>
        <iframe src="/apitest" />
      </div>
      <p className="legend">an iframe to /apitest</p>
    </div>
  </Carousel>
);
const DynamicPlot = dynamic(import('../components/plot'), {
  ssr: false,
});

const ContentRow = ({ state }) => (
  <div>
    <div className="row">
      <div className="col-md-7">
        <DynamicPlot />
      </div>
      <div className="col-md-5">
        Here we can see a plot of one of the 60 electrodes on the
        nervecellsboards (mea?) ffjdlasjfkldjaflkdj afjldksajflødakfjdølafkjda{' '}
      </div>
    </div>
    <div className="row">
      <div className="col-md-5">
        <p>hei</p>
      </div>
      <div className="col-md-7">
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
