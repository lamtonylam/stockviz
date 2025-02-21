# StockViz Frontend

## Environment Variables

The frontend application can be configured using the following environment variables:

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_BACKEND_URL | URL of the backend API | http://localhost:3000 |

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the frontend directory (optional):
```bash
VITE_BACKEND_URL={http://your-backend-url}
```

3. Start the development server:
```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```
