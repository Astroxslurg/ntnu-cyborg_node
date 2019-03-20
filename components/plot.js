import Plot from 'react-plotly.js';
import Api from '../src/api-client';

class Plot1 extends React.Component {
  constructor() {
    super();
    this.state = {
      sensordata: null,
    };
  }
  async componentDidMount() {
    const result = await Api.fetchSensorData();
    this.setState({ sensordata: result });
    console.log(this.state.sensordata);
  }

  render() {
    console.log(this.state);
    if (!this.state.sensordata) {
      return <div />;
    }
    return (
      <Plot
        data={[
          {
            y: this.state.sensordata.resultList,
            x: this.state.sensordata.timestampList,
            type: 'scatter',
            mode: 'lines+points',
            marker: { color: 'blue' },
          },
          { type: 'scatter' },
        ]}
        layout={{
          title: 'A Fancy Plot',
          xaxis: {
            title: {
              text: this.state.sensordata.tUnit,
              font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f',
              },
            },
          },
          yaxis: {
            title: {
              text: this.state.sensordata.vUnit,
              font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f',
              },
            },
          },
        }}
      />
    );
  }
}

export default Plot1;
