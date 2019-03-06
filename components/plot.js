

import Plot from 'react-plotly.js';
import Api from '../src/api-client';

class Testtest extends React.Component {
    constructor() {
      super();
      this.state = {
          sensordata: null,
          ys: [],
          zs: []
      };
    }
    async componentDidMount() {
        const result = await Api.fetchSensorData();
        this.setState({sensordata: result});
        //this.setState({ys: result.resultList});
        //this.setState({zs: result.resultList});

        for (let i = 0; i <= result.resultList.length; i++){
            this.state.ys.push(i);
            this.state.zs.push(1);
        }

        console.log(this.state.sensordata.resultList);
    }

   render() {
        console.log(this.state);
        if (!this.state.sensordata){
            return <div></div>
        }
       return (
           <Plot
               data={[
                   {
                       x: this.state.sensordata.resultList,
                       y: this.state.ys,
                       z: this.state.zs,
                       type: 'scatter3d',
                       mode: 'lines+points',
                       marker: {color: 'red'},
                   },
                   {type: 'scatter3d'},
               ]}
               layout={{width: 1200, height: 800, title: 'A Fancy Plot'}}
           />
       );
   }
}

export default Testtest;
