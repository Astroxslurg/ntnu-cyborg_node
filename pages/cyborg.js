import React, { Component } from 'react';

class Cyborg extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row mt-5 mb-4">
          <div className="col-md-8">
            <img className="img-responsive" src="../static/robot.png" />
          </div>
          <div className="col-md-4  ">
            <h1 style={{ color: '#00509e' }}>Cyborg</h1>
            <p>
              NTNU Cyborg is a collaboration between the Department of
              Engineering Cybernetics (ITK), the Department of Computer Science
              (IDI) and the Department of Neuromedicine and Movement Science
              (INB).
            </p>

            <p>
              NTNU Cyborg is a project to develop a Cyborg (a cybernetic
              organism). The aim in this project is to enable communication
              between living nerve tissue and a robot. The social and
              interactive Cyborg serves as a platform for studying neural
              signaling properties, robotics and hybrid bio-robotic machines.
              The project aims to bring NTNU to the forefront of international
              research within these areas, while creating a platform for
              interdisciplinary collaborations and teaching.
            </p>
            <p>
              Biomedical aspects of the project includes understanding
              signalling between nerve cells, learning and plasticity,
              structuring and self organising biological networks, research on
              progression on diseases and rehabilitation.
            </p>
            <p>
              For more information about Cyborg, click{' '}
              <a href="https://www.ntnu.edu/cyborg"> here</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Cyborg;
