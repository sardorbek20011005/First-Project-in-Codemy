import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { PieSeries, } from '@devexpress/dx-react-chart';

const data = [
  { region: 'Asia', val: 5119626293 },
  { region: 'Northern America', val: 12044124520 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
  { region: 'Europe', val: 1027082222 },
  { region: 'Oceania', val: 55104756 },
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
            innerRadius={0.4}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}