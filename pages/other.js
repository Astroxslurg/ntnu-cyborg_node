import React, { Component } from 'react';

class Other extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5 mb-4">
          <div className="col-md-8">
            <img className="img-responsive" src="../static/SiNRI_logo.png" />
          </div>
          <div className="col-md-4">
            <h1>Simple Neural Response Interpreter - SiNRI</h1>
            <p>
              This project entails working towards creating a minimalistic
              system that interfaces with the in-vitro neural chamber to
              interpret responses to external stimuli. The project consists of
              several parts, required to take external sensory input, forward it
              to the chamber as stimuli, and then interpret the inner workings
              of the network to decide whether to act or not.
            </p>
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col-md-4">
            <h1>Rock-Paper-Scissor</h1>
            <p>
              This project entails working towards creating a minimalistic
              system that interfaces with the in-vitro neural chamber to
              interpret responses to external stimuli. The project consists of
              several parts, required to take external sensory input, forward it
              to the chamber as stimuli, and then interpret the inner workings
              of the network to decide whether to act or not.
            </p>
          </div>
          <div className="col-md-8">
            <img className="img-responsive" src="../static/SiNRI_logo.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Other;
