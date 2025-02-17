import { useState, useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { get_stock_data } from '../utils/parser';

export const DayChart = () => {
  const [chartData, setChartData] = useState<[number, number][]>([]);

  // use effect for waiting the stock data to load
  useEffect(() => {
    const fetchData = async () => {
      const data = await get_stock_data();
      setChartData(data);
    };

    fetchData();
  }, []);

  const options = {
    title: {
      text: 'Apple Inc. stock price',
    },
    series: [
      {
        type: 'line',
        name: 'AAPL',
        data: chartData,
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
