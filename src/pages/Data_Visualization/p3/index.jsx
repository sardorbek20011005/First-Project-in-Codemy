import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
  Chart,
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { PieSeries, } from '@devexpress/dx-react-chart';

const data = [
  { region: 'Asia', val: 26293 },
  { region: 'Africa', val: 1012956064 },
  { region: 'Northern America', val: 344124520 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
  { region: 'Europe', val: 727082222 },
  { region: 'Oceania', val: 35104756 },
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
            innerRadius={0.7}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}
