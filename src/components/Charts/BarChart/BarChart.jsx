import * as React from "react";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
  ValueAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";

const arr = []
const pieData = JSON.parse(localStorage.getItem('products'))
pieData.map(dataItem => (
  arr.push(
  {price: dataItem.store,area:dataItem.price},
  )
))


export default class BarChart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      arr,
    };
  }
  render() {
    return (
        <Chart style={{marginTop: '5%'}} data={arr}>
          <ArgumentAxis />
          <ValueAxis max={100} />

          <BarSeries
            valueField="area"
            argumentField="price"
            color={"#5865d5"}
            barWidth={0.8}
          />
          <Animation />
        </Chart>

    );
  }
}
