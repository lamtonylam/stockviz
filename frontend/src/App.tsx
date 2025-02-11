/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { get_stock_data } from './utils/parser';


function App() {

  const options = {
    title: {
      text: 'AAPL stock price'
    },
    series: [{
      type: 'line',
      name: 'AAPL',
      data: get_stock_data(),
      tooltip: {
        valueDecimals: 2
      },
    }],
  };
  const MyChart = () => (
    <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'}
      options={options} />
  );

  return (
    <>
      <MyChart></MyChart>
    </>
  )
}

export default App