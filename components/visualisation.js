import React, { Component } from 'react';
import Api from '../src/api-client';
import { getGradient } from '../src/helpers';

const drawLine = (
  lineRadius,
  angleStart,
  angleEnd,
  gradientValue,
  ctx,
  multiplier,
) => {
  const strokeString = getGradient(gradientValue);
  ctx.strokeStyle = strokeString;
  ctx.beginPath();
  ctx.arc(250, 250, Math.abs(lineRadius) * multiplier, angleStart, angleEnd);
  ctx.stroke();
};

const drawOne = (ctx, size, angle, dataList) => {
  const increment = (2 * Math.PI) / dataList.length;
  const seqOfSameColor =
    dataList.length < 768 ? 1 : Math.floor(dataList.length / 768);

  const radius = size / 2;

  console.log(dataList);

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
    drawLine(
      dataList[i],
      i * angle,
      (i + 1) * angle,
      gradientValue,
      ctx,
      multiplier,
    );
  }
};

class Visualisation extends Component {
  constructor() {
    super();
    this.state = {
      sensordata: { yolo: '' },
      canvasSize: 500,
    };
  }

  async componentDidMount() {
    // const result = await Api.fetchNodesForTimeInterval([12, 21], 0, 1000);
    const result = await Api.fetchAllData();
    console.log(result);
    this.setState({ sensordata: result });

    if (!this.state.sensordata.resultMap) {
      console.log(`ERROR: no resultMap`);
      return;
    }

    const size = this.state.canvasSize;
    const allDataLists = Object.values(this.state.sensordata.resultMap);

    const canvas = this.refs.canvas;
    const ctx = canvas.getContext('2d');

    const angle = (2 * Math.PI) / allDataLists.length;

    console.log(allDataLists);

    for (let i = 0; i < allDataLists.length; i++) {
      drawOne(ctx, size, angle, Object.values(allDataLists[i]));
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
