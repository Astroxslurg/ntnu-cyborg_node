import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const onChange = () => true;
const onClickItem = () => true;
const onClickThumb = () => true;

const DynamicPlot = dynamic(import('../components/plot'), {
    ssr: false
})

const Index = ({ state }) => (
    <div>
    <Carousel
      showArrows={true}
      //emulateTouch
      //width="400"
      //onChange={onChange}
      centerMode={true}
      intiniteLoop={true}
      //onClickThumb={onClickThumb}
      //onClickItem={onClickItem}>
        >
      <div>
          <DynamicPlot/>
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
  </div>
);


export default Index;
