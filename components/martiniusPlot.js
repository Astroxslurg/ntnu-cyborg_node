import React, { Component } from 'react';
import Api from '../src/api-client';
import DropdownToggle from 'react-bootstrap/DropdownToggle';

class MartiniusPlot extends Component {
  constructor() {
    super();
    this.state = {
      title: 'fancy title ------------------------', //((typeof this.props.title) == "undefined" ? "fancytitle" : this.props.title)
    };
  }

  async componentDidMount() {
    const data = await Api.fetchNodesForTimeInterval('all', 0, 10000);
    this.setState({ data: data });
    console.log(this.state.datas);
    const nodes = await Api.fetchNodes();
    const listItems = nodes.map(node => <li>{node}</li>);
    this.setState({ nodes: listItems });

    var arr = [[], []];
    const grid = [];
    for (let i = 0; i < 10; i++) {
      grid.push([]);
      for (let j = 0; j < 10; j++) {
        grid[i].push('-');
      }
    }
    console.log(grid);

    console.log('nodes:' + nodes);
    nodes.forEach(function(item, index, array) {
      //console.log(item, index);
      //console.log(item.toString().substring(0,1));
      //console.log(item.toString().substring(1,2));

      grid[parseInt(item.toString().substring(0, 1))][
        parseInt(item.toString().substring(0, 1))
      ] = item;
    });
    console.log('grid ' + grid);
    //this.setState({grid: grid});
  }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        {/*console.log(this.state.grid)*/}
        <canvas id="myCanvas" />
      </div>
    );
  }
}
export default MartiniusPlot;
