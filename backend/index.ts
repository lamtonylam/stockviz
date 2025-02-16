import express from 'express';
import { get_daily_stock } from './utils/stock_api';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/', async (req, res) => {
  const ticker = req.query.ticker as string;
  // if no ticker is provided, default to AAPL stock
  const stockData = await get_daily_stock(ticker ? ticker : 'AAPL');
  res.send(stockData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
