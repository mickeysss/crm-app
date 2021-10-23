import * as React from 'react';
import {
  Chart,
  PieSeries,BarSeries,SplineSeries
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import styles from './PieChart.module.scss'

const arr = []
const pieData = JSON.parse(localStorage.getItem('products'))
pieData.map(dataItem => (
  arr.push(
  {price: dataItem.productName,area:dataItem.price},
  )
))
console.log(arr)

export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      arr,
    };
  }

  render() {
    return (

        <Chart classname={styles.chart} style={{width:'15%', height: "15%", position: 'absolute', margin: "150px 0"}}
          data={arr}
        >
          <PieSeries
            valueField="area"
            argumentField="price"
          />
          <Animation />
        </Chart>
    );
  }
}
