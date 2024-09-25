import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import { handler } from './build/handler.js';
import morgan from 'morgan';

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('combined'));

// Proxy API requests to the FastAPI backend
app.use('/api', createProxyMiddleware({ 
  target: 'http://localhost:8000', 
  changeOrigin: true 
}));

// Use SvelteKit's handler
app.use(handler);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});