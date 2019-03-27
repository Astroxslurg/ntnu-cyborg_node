import React, { Component } from 'react';
import Test from '../components/test';
import Api from '../src/api-client';

const getGradient = value => {
  if (value < 0) {
    console.log(`Error: getGradient got negative value`);
    return '#000000';
  }
  const modVal = value % 768;
  let r, g, b;
  if (modVal < 256) {
    r = 255 - modVal;
    g = modVal;
    b = 0;
  } else if (modVal < 512) {
    r = 0;
    g = 256 - (modVal % 256);
    b = modVal % 256;
  } else {
    r = modVal % 256;
    g = 0;
    b = 256 - (modVal % 256);
  }
  return String.prototype.concat(
    '#',
    r.toString(16).padStart(2, '0'),
    g.toString(16).padStart(2, '0'),
    b.toString(16).padStart(2, '0'),
  );
};

const draw = (arr, index, gradientValue, ctx, multiplier) => {
  const strokeString = getGradient(gradientValue);
  ctx.strokeStyle = strokeString;
  // console.log(`gradientValue: ${gradientValue}, strokeString: ${strokeString}`);
  // console.log(`val: ${arr[index]}`);
  const reverter = arr[index] < 0 ? Math.PI : 0;
  ctx.beginPath();
  ctx.arc(
    250,
    250,
    Math.abs(arr[index]) * multiplier,
    0 + reverter,
    Math.PI + reverter,
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
    // const result = await Api.fetchNodesForTimeInterval([12, 21], 0, 1000);
    console.log(result);
    const result = await Api.fetchSensorData();
    this.setState({ sensordata: result });

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const size = this.state.canvasSize;
    const dataList = this.state.sensordata.resultList;

    const increment = (2 * Math.PI) / dataList.length;
    const seqOfSameColor =
      dataList.length < 768 ? 1 : Math.floor(dataList.length / 768);

    const radius = size / 2;

    const maxVal = Math.max(
      Math.abs(Math.min(...dataList)),
      Math.max(...dataList),
    );
    const multiplier = radius / maxVal;

    const startCords = [radius, radius];
    const endCords = [radius, radius];
    const endRadius = 120;

    ctx.lineWidth = 6;
    ctx.lineCap = 'round';

    let seq = -seqOfSameColor;
    let gradientValue = 0;

    for (let i = 0; i < dataList.length; i++) {
      seq = (seq + 1) % seqOfSameColor;
      gradientValue = seq ? gradientValue : gradientValue + 24;
      draw(dataList, i, gradientValue, ctx, multiplier);
    }
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
