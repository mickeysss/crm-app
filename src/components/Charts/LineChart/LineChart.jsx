import React from 'react'
import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  Legend,
} from '@devexpress/dx-react-chart-material-ui';
import { withStyles } from '@material-ui/core/styles';
import { Animation } from '@devexpress/dx-react-chart';

const arr = []
const pieData = JSON.parse(localStorage.getItem('products'))
pieData.map(dataItem => (
  arr.push(
  {area:dataItem.remains,price: dataItem.price},
  )
))

const format = () => tick => tick;
const legendStyles = () => ({
  root: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'row',
  },
});
const legendLabelStyles = theme => ({
  label: {
    paddingTop: theme.spacing(1),
    whiteSpace: 'nowrap',
  },
});
const legendItemStyles = () => ({
  item: {
    flexDirection: 'column',
  },
});

const legendRootBase = ({ classes, ...restProps }) => (
  <Legend.Root {...restProps} className={classes.root} />
);
const legendLabelBase = ({ classes, ...restProps }) => (
  <Legend.Label className={classes.label} {...restProps} />
);
const legendItemBase = ({ classes, ...restProps }) => (
  <Legend.Item className={classes.item} {...restProps} />
);
const Root = withStyles(legendStyles, { name: 'LegendRoot' })(legendRootBase);
const Label = withStyles(legendLabelStyles, { name: 'LegendLabel' })(legendLabelBase);
const Item = withStyles(legendItemStyles, { name: 'LegendItem' })(legendItemBase);
const lineStyles = () => ({
  chart: {
    paddingRight: '20px',
    height: '30px'
  },
  title: {
    whiteSpace: 'pre',
  },
});

const ValueLabel = (props) => {
  const { text } = props;
  return (
    <ValueAxis.Label
      {...props}
      text={`${text}%`}
    />
  );
};


class LineChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      arr,
    };
  }

  render() {
    return (
      
        <Chart style={{height: '9%'}}
          data={arr}
         
        >
          <LineSeries style={{width:'50px'}}
            valueField="price"
            argumentField="area"
            color={'green'}
          />
         

          <Animation />
        </Chart>
  
    );
  }
}

export default withStyles(lineStyles, { name: 'LineChart' })(LineChart);