import React from 'react';
import { Chart } from 'react-google-charts';
 
export default class Pyramide extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
          chartType="BarChart"
            data={
                [
                    ['Idade', 'Mulheres', 'Homens'],
                    ['0-4', -8, 12],
                    ['5-9' , -4, 5.5],
                    ['10-14' , -4, 5.5],
                    ['15-19' , -4, 5.5],
                    ['20-24' , -4, 5.5],
                    ['25-29' , -4, 5.5],
                    ['30-34' , -4, 5.5],
                    ['35-39' , -4, 5.5],
                    ['40-44' , -4, 5.5],
                    ['45-49' , -4, 5.5],
                    ['50-54' , -4, 5.5],
                    ['55-59' , -4, 5.5],
                    ['60-64' , -4, 5.5],
                    ['65-69' , -4, 5.5],
                    ['70-74' , -4, 5.5],
                    ['75-79' , -4, 5.5],
                    ['80-84' , -4, 5.5],
                    ['85-89' , -4, 5.5],
                    ['90-94' , -4, 5.5],
                    ['95-99' , -4, 5.5],
                    ['100 +' , -4, 5.5],
                ]
            }
          options={{
            isStacked: true
          }}
          graph_id="BarChart"
          width="100%"
          height="400px"
          legend_toggle
        />
      </div>
    );
  }
}