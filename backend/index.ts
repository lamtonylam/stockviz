import express from 'express';
import { get_daily_stock } from './utils/stock_api';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', async (_req, res) => {
  const stockData = await get_daily_stock("IBM");
  res.send(stockData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
