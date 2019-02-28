


import Plot from 'react-plotly.js';

class Testtest extends React.Component {
   render() {
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
