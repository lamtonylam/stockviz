# StockViz
Apple stock visualizer

## Prerequisites

- Docker, [Download it here](https://docs.docker.com/get-started/get-docker/)

## Start the application

1. Add .env file to backend folder's root
```
alphavantage_api_key={your_key}
```
You can get the AlphaVantage key [here](https://www.alphavantage.co/support/#api-key)

2. Start the application:
```bash
docker compose up
```

3. Access the application at `http://localhost:5173`

## Stop the Application

To stop the containers:
```bash
docker compose down
```

## Development

For development, you can use:
```bash
docker compose up --build
```