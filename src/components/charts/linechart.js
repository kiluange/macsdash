import React from 'react';
import { Chart } from 'react-google-charts';
 
export default class LineChart extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
            chartType="LineChart"
            data= {this.props.data}
            options={{
              title: this.props.title
            }}
            width="100%"
            height="400px"
            legend_toggle
        />
      </div>
    );
  }
}