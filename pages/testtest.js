import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const onChange = () => true;
const onClickItem = () => true;
const onClickThumb = () => true;

const Testtest = () => (
  <div>
    <h1>Offical Testing Portal</h1>
    <h2>Test yeaaaah!</h2>
    <Carousel
      showArrows={true}
      emulateTouch
      onChange={onChange}
      onClickThumb={onClickThumb}
      onClickItem={onClickItem}>
      <div>
        <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
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

export default Testtest;
