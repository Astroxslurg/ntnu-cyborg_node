import React from 'react';
import rd3 from 'react-d3-library';
const RD3Component = rd3.Component;

class my_First_React_D3_Library_Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { d3: '' };
  }

  componentDidMount() {
    var node = document.createElement('div');

    var diameter = 960,
      format = d3.format(',d'),
      color = d3.scale.category20c();

    var bubble = d3.layout
      .pack()
      .sort(null)
      .size([diameter, diameter])
      .padding(1.5);

    var svg = d3
      .select(node)
      .append('svg')
      .attr('width', diameter)
      .attr('height', diameter)
      .attr('class', 'bubble');
    this.setState({ d3: node });
  }

  render() {
    return (
      <div>
        <RD3Component data={this.state.d3} />
      </div>
    );
  }
}

export default my_First_React_D3_Library_Component;
