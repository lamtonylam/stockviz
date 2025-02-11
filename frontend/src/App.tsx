/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css'
import Highcharts from 'highcharts/highstock';
import HighchartsReact from "highcharts-react-official";


function App() {

  const options = {
    title: {
      text: 'AAPL stock price'
    },
    series: [{
      data: [
        ["2024-01-01", 100],
        ["2024-01-02", 105],
        ["2024-01-03", 110]
      ]
    }]
  };

  const MyChart = () => (
    <HighchartsReact highcharts={Highcharts} constructorType={'stockChart'}
      options={options} />
  );

  return (
    <>
      hello world
      <MyChart></MyChart>
    </>
  )
}

export default App