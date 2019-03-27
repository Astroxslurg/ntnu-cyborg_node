import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-8">
            <img className="img-responsive" src="../static/EiT_Oss.jpg" />
          </div>
          <div className="col-md-4 mt-4">
            <p>
              This website is the project of group 4 in the NTNU Cyborg village
              in the course EiT. Eit is a subject in NTNU that focuses on
              teamwork and develop the students skills in area. You can read
              more about EiT
              <a href="https://www.ntnu.edu/eit"> here</a>.
            </p>

            <p>
              The purpose of this project is to visualise the activity of the
              neurons used by NTNU Cyborg. We want to show people how
              interesting and complex the int eractions in the cell culture can
              be. The website is to be used as exposure for NTNU Cyborg, and can
              be further developed in the future.
            </p>
            <p>
              Our group is composed of five people (from left to right): Karen,
              Kim , Kristian, Herman and Abdurahim. As a result, we decided to
              have the group n ame K3AH. We’re from different specialisations -
              two people are from Computer Science, one is from Informatics and
              two are from Cybernetics and Robotics.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p>hei</p>
          </div>
          <div className="col-md-8" />
        </div>
      </div>
    );
  }
}

export default About;
