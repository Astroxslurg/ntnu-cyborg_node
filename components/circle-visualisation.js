import React, { Component } from 'react';
import Api from '../src/api-client';
import { getGradient } from '../src/helpers';

const draw = (arr, index, gradientValue, ctx, multiplier) => {
  const strokeString = getGradient(gradientValue);
  ctx.strokeStyle = strokeString;
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

class CircleVisualisation extends Component {
  constructor() {
    super();
    this.state = {
      sensordata: {},
      canvasSize: 500,
    };
  }

  async componentDidMount() {
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

export default CircleVisualisation;
