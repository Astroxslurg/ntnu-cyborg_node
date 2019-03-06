


import Plot from 'react-plotly.js';


import Api from '../src/api-client';




class Testtest extends React.Component {
 constructor() {
    super();
    this.state = {
      data: null

    };
  }
    componentDidMount() {
        fetch('http://localhost:8080/sensordata')
            .then(response => response.json())
            .then(data => this.setState({ data }));

        console.log(this.state.data);
    }


   render() {
       //const result = Api.fetchSensorData();
       //this.setState({ sensordata: result });


       //console.log(result.then(response => response.json())
       //    .then(data => this.setState({ data });

       console.log(this.state.data);
       console.log("hei jeg lever");
       return (
           <Plot
               data={[
                   {
                       x: [1, 2, 3],
                       y: [2, 6, 3],
                       z: [3,5,1],
                       type: 'scatter3d',
                       mode: 'lines+points',
                       marker: {color: 'red'},
                   },
                   {type: 'scatter3d', x: [1, 2, 3], y: [2, 5, 3]},
               ]}
               layout={{width: 1200, height: 800, title: 'A Fancy Plot'}}
           />
       );
   }
}

export default Testtest;
