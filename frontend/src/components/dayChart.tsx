import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { get_stock_data } from '../utils/parser';

export const DayChart = () => {
  const options = {
    title: {
      text: 'Apple Inc. stock price',
    },
    series: [
      {
        type: 'line',
        name: 'AAPL',
        data: get_stock_data(),
        tooltip: {
          valueDecimals: 2,
        },
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={'stockChart'}
      options={options}
    />
  );
};
