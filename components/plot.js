

import Plot from 'react-plotly.js';
import Api from '../src/api-client';

class Testtest extends React.Component {
    constructor() {
      super();
      this.state = {
          sensordata: null,
          ys: []
      };
    }
    async componentDidMount() {
        const result = await Api.fetchSensorData();
        this.setState({sensordata: result});
        //this.setState({ys: result.resultList});
        //this.setState({zs: result.resultList});

        for (let i = 0; i <= result.resultList.length; i++){
            this.state.ys.push(i);
            //this.state.zs.push(1);
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
                       y: this.state.sensordata.resultList,
                       x: this.state.ys,
                       type: 'scatter',
                       mode: 'lines+points',
                       marker: {color: 'red'},
                   },
                   {type: 'scatter'},
               ]}
               layout={{width: 1200, height: 800, title: 'A Fancy Plot'}}
           />
       );
   }
}

export default Testtest;
