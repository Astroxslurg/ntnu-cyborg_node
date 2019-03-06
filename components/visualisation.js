import React, { Component } from 'react';
import Test from '../components/test';
import Api from '../src/api-client';

class Visualisation extends Component {
  constructor() {
    super();
    this.state = {
      sensordata: { yolo: 'yolo' },
      canvasSize: 500,
    };
  }

  async componentDidMount() {
    const result = await Api.fetchSensorData();
    this.setState({ sensordata: result });

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    // Create gradient
    // var grd = ctx.createLinearGradient(0, 0, 500, 0);
    // grd.addColorStop(0, 'red');
    // grd.addColorStop(1, 'white');

    const radius = this.state.canvasSize / 2;
    const startCords = [radius, radius];
    const endCords = [radius, radius];
    const endRadius = radius;

    const gradient = ctx.createRadialGradient(
      startCords[0],
      startCords[1],
      0,
      endCords[0],
      endCords[1],
      endRadius
    );
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'white');

    // Fill with gradient
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 500, 500);

    ctx.lineWidth = 6;
    ctx.lineCap = 'round';

    // ctx.beginPath();
    // ctx.arc(250, 250, 200, 0.3, Math.PI - 0.3);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.ellipse(150, 160, 25, 55, 0, 0, 2 * Math.PI);
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.ellipse(350, 160, 25, 55, 0, 0, 2 * Math.PI);
    // ctx.stroke();
  }

  render() {
    return (
      <div>
        <p>{this.state.sensordata.yolo}</p>
        <canvas
          id="myCanvas"
          width={this.state.canvasSize}
          height={this.state.canvasSize}
          style={{
            border: '1px solid #d3d3d3',
            borderRadius: this.state.canvasSize,
          }}
          ref="canvas"
        />
      </div>
    );
  }
}

export default Visualisation;
