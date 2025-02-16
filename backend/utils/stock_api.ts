import axios from 'axios';
import 'dotenv/config';

interface StockApiResponse {
  'Meta Data': {
    '1. Information': string;
    '2. Symbol': string;
    '3. Last Refreshed': string;
    '4. Output Size': string;
    '5. Time Zone': string;
  };
  'Time Series (Daily)': {
    [date: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    };
  };
}

export const get_daily_stock = async (ticker: string) => {
  // api limits
  // const api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${process.env.alphavantage_api_key}`;
  const api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=demo`;

  try {
    const getStockData = await axios.get<StockApiResponse>(api_url);
    return getStockData.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
