import React from 'react';

const testData = [5, 10, 2, 4, 6, 4, 1, 7, 2];
// const testData = [0, 10, 5];

// const Testtest = () => {
class Testtest extends React.Component {
  componentDidMount() {
    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    console.log(canvas.width);

    const lineWidth = canvas.width / testData.length - 2;
    ctx.lineWidth = lineWidth;

    for (const i in testData) {
      // console.log(testData[i]);
      const xcord = 1 + (4 * i + lineWidth) / 2 + lineWidth * i;
      console.log(xcord);
      ctx.beginPath();
      ctx.moveTo(xcord, 500);
      ctx.lineTo(xcord, 500 - 50 * testData[i]);
      ctx.stroke();
    }
    //
    // // Create gradient
    // var grd = ctx.createLinearGradient(0, 0, 500, 0);
    // grd.addColorStop(0, 'red');
    // grd.addColorStop(1, 'white');
    //
    // // Fill with gradient
    // ctx.fillStyle = grd;
    // ctx.fillRect(0, 0, 500, 500);
    //
    // ctx.lineWidth = 16;
    // ctx.lineCap = 'round';
    //
    // ctx.beginPath();
    // ctx.arc(250, 250, 200, 0.3, Math.PI - 0.3);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.ellipse(150, 160, 25, 55, 0, 0, 2 * Math.PI);
    // ctx.stroke();
    //
    // ctx.beginPath();
    // ctx.ellipse(350, 160, 25, 55, 0, 0, 2 * Math.PI);
    // ctx.stroke();
  }

  render() {
    return (
      <div>
        <canvas
          id="myCanvas"
          width="500"
          height="500"
          style={{ border: '1px solid #d3d3d3' }}
          ref="canvas"
        />
      </div>
    );
  }
}

export default Testtest;
