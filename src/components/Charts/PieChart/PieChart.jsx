import * as React from 'react';

import styles from './PieChart.module.scss'

import {
  Chart,
  PieSeries
} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';
import { imgs } from '../../../mock/mock';
const arr = []
const pieData = JSON.parse(localStorage.getItem('sale'))
pieData.map(dataItem => (
  arr.push(
  {name: dataItem.store,area:dataItem.price},
  )
))
export default class PieChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arr,
    };
  }
  render() {
    return (
    <>
        <Chart classname={styles.chart} style={{width:'10%', height: "15%", marginLeft: '100px', position: 'absolute'}}
          data={arr}
        >
          <PieSeries
            valueField="area"
            argumentField="name"
          />
          <Animation />
        </Chart>
        <ul className={styles.analyticList}>
                  <li className={styles.analyticItem}>
                    <img
                      className={styles.ovalIcon}
                      src={imgs.smallOvalIcon}
                      alt="analytic"
                    />
                    <p>{pieData[0].store}</p>
                  </li>
         </ul>
    </>
    );
  }
}
