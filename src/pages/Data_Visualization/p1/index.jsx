import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { PieSeries, } from '@devexpress/dx-react-chart';

const data = [
  { region: 'Asia', val: 9119626293 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
  { region: 'Europe', val: 427082222 },
];

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Paper sx={{
        height:"40vh",
        background:"none",
        boxShadow:'none'
      }}>
        <Chart
          data={chartData}
        >
          <PieSeries
            
            valueField="val"
            argumentField="region"
            innerRadius={0.1}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}