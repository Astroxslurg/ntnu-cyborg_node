import React, { Component } from 'react';
import Test from '../components/test';
import Api from '../src/api-client';

const getGradient = currentColor => {
  const r = parseInt(currentColor[1].concat(currentColor[2]));
  const g = parseInt(currentColor[3].concat(currentColor[4]));
  const b = parseInt(currentColor[5].concat(currentColor[6]));
};

const draw = (arr, index, color, seqOfSameColor, seq) => {
  color = (parseInt(color[1].concat(color[2]), 16) + 15).toString(16);
  ctx.strokeStyle = color;

  const reverter = Math.PI ? dataList[i] < 0 : 0;
  ctx.beginPath();
  ctx.arc(
    250,
    250,
    Math.abs(dataList[i]) * multiplier,
    i * increment + reverter,
    (i + 1) * increment + reverter
  );
  ctx.stroke();
};

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

    const size = this.state.canvasSize;
    // const color = '#72c036';
    // const otherColor = '#c92e67';
    // const color = '#00d026';
    // const otherColor = '#d90097';
    const dataList = this.state.sensordata.resultList;
    const increment = (2 * Math.PI) / dataList.length;
    const seqOfSameColor = Math.floor(dataList.length / 768);

    const radius = size / 2;

    const maxVal = Math.max(
      Math.abs(Math.min(...dataList)),
      Math.max(...dataList)
    );
    const multiplier = radius / maxVal;

    const startCords = [radius, radius];
    const endCords = [radius, radius];
    const endRadius = 120;
    //
    // const gradient = ctx.createRadialGradient(
    //   startCords[0],
    //   startCords[1],
    //   0,
    //   endCords[0],
    //   endCords[1],
    //   endRadius
    // );
    // gradient.addColorStop(1, color);
    // gradient.addColorStop(0, otherColor);

    // Fill with gradient
    // ctx.fillStyle = gradient;
    // ctx.fillRect(0, 0, size, size);

    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    // ctx.strokeStyle = color;

    // console.log(increment);
    // console.log(dataList);

    let color = '#000000';

    for (let i = 0; i < dataList.length; i++) {
      color = (parseInt(color[1].concat(color[2]), 16) + 15).toString(16);
      ctx.strokeStyle = color;

      const reverter = Math.PI ? dataList[i] < 0 : 0;
      ctx.beginPath();
      ctx.arc(
        250,
        250,
        Math.abs(dataList[i]) * multiplier,
        i * increment + reverter,
        (i + 1) * increment + reverter
      );
      ctx.stroke();
    }

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
            border: '3px solid #d3d3d3',
            borderRadius: this.state.canvasSize,
          }}
          ref="canvas"
        />
      </div>
    );
  }
}

export default Visualisation;
