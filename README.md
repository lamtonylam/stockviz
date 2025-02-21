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
docker compose -f docker-compose.local.yml up

3. Access the application at `http://localhost:5173`

## Stop the Application

To stop the containers:
```bash
docker compose down
```

## Running Docker compose in production (using environment variables and not .env file)
Define the variables:
```
VITE_BACKEND_URL={your_backend_url}
alphavantage_api_key={your_key}
```

Then run
```bash
docker-compose up
``