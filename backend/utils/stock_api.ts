import Axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';
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
const instance = Axios.create();
const axios = setupCache(instance);

export const get_daily_stock = async (
  ticker: string
): Promise<StockApiResponse | null> => {
  const api_url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&apikey=${process.env.alphavantage_api_key}`;
  try {
    const getStockData = await axios.get<StockApiResponse>(api_url, {
      cache: { ttl: 1000 * 60 * 60 }, // cache time to live is 1 hour
    });
    return getStockData.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
