import React, { Component } from 'react';

class Other extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5 mb-4">
          <h1>Other Projects</h1>
        </div>
        <div className="row mt-2 mb-2">
          <div className="col-md-6">
            <img className="img-responsive" src="../static/grp1.png" />
          </div>
          <div className="col-md-6">
            <h3>GR1: Simple Neural Response Interpreter - SiNRI</h3>
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
          <div className="col-md-6">
            <h3>GR2: Core Reservoir Experiment Python Example - CREPE</h3>
            <p>
              We are attempting to create a framework for connecting sensor
              systems to Cyborg’s biological neural network. We call this CREPE.
              CREPE will in general do the same as SHODAN does currently, but
              with a strongly reduced functionality set. The idea is to reduce
              the threshold for use of the neural network, so it becomes easier
              for researchers and students to get started. Due to this we are
              attempting to produce the entire project using Python. To make it
              easier to see how to use CREPE we are also making an example
              experiment that will play rock-paper-scissors using a IR camera.
            </p>
          </div>
          <div className="col-md-6">
            <img className="img-responsive" src="../static/grp2.jpg" />
          </div>
        </div>
        <div className="row mt-5 mb-4">
          <div className="col-md-6">
            <img className="img-responsive" src="../static/grp3.jpg" />
          </div>
          <div className="col-md-6">
            <h3>GR3: Completing the Robot Body</h3>
            <p>
              Group 3's main task has been to finish the robot's exterior body.
              Throughout the project, we've had the opportunity to work with the
              design and manufacturing of new parts, modification of existing
              hardware, and the procurement of missing components. The project
              culminated in an extensive paint job with the main goal of making
              the cyborg presentable by the end of the semester. We aspire to
              produce a robot with satisfactory functionality and design that
              can promote the NTNU Cyborg while driving around the EL-building.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Other;
