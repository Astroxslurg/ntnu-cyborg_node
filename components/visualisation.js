import React, { Component } from 'react';
import Test from '../components/test';
import Api from '../src/api-client';

class ApiTest extends Component {
  constructor() {
    super();
    this.state = {
      sensordata: { yolo: 'yolo' },
    };
  }

  async componentDidMount() {
    const result = await Api.fetchSensorData();
    this.setState({ sensordata: result });
  }

  render() {
    return (
      <div>
        <p>{this.state.sensordata.yolo}</p>
      </div>
    );
  }
}

export default ApiTest;
