import React from 'react';
import Api from '../src/api-client';

const ApiTest = ({ state }) => (
  <div>
    <h6>{state.hello.id}</h6>
    <p>{state.hello.content}</p>
  </div>
);

export default ApiTest;
