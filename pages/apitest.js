import React, { Component } from 'react';
import Test from '../components/test';
import Api from '../src/api-client';

class ApiTest extends Component {
  constructor() {
    super();
    this.state = {
      hello: {
        id: -1,
        content: ' ',
      },
    };
  }

  async componentDidMount() {
    const result = await Api.fetchHello();
    this.setState({ hello: result });
  }

  render() {
    return (
      <div>
        <h6>{this.state.hello.id}</h6>
        <p>{this.state.hello.content}</p>
      </div>
    );
  }
}

export default ApiTest;
