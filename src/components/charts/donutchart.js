import React from 'react';
import { Chart } from 'react-google-charts';
 
export default class DonutChart extends React.Component {
  render() {
    return (
      <div className={'my-pretty-chart-container'}>
        <Chart
            chartType="PieChart"
            data={this.props.data}
            options={{
                title: this.props.title,
                pieHole: 0.4,
            }}
            width="100%"
            height="400px"
            legend_toggle
        />
      </div>
    );
  }
}