import axios from 'axios';

interface StockData {
  '4. close': string;
  [key: string]: string;
}

const stock_api_call = async () => {
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const response = await axios.get(`${backendUrl}/?ticker=AAPL`);
  return response.data;
};

export const get_stock_data = async (): Promise<[number, number][]> => {
  const stock_data = (await stock_api_call())['Time Series (Daily)'];

  const stock_data_list: [number, number][] = [];

  for (const [key, value] of Object.entries(stock_data) as [
    string,
    StockData
  ][]) {
    // adds to the list (date in epoch , closing value)
    stock_data_list.push([new Date(key).getTime(), Number(value['4. close'])]);
  }

  // sort the list by ascending order, ie oldest entry is first in array
  stock_data_list.sort((a, b) => a[0] - b[0]);

  return stock_data_list;
};
