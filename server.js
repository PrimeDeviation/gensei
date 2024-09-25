const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(morgan('combined'));

if (isProduction) {
  // Serve static files from the 'dist' directory in production
  app.use(express.static(path.join(__dirname, 'dist')));
} else {
  // In development, proxy requests to the webpack-dev-server
  app.use('/', createProxyMiddleware({ target: 'http://localhost:8080', changeOrigin: true }));
}

// Proxy API requests to the FastAPI backend
app.use('/api', createProxyMiddleware({ target: 'http://localhost:8000', changeOrigin: true }));

// Serve index.html for all routes (SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});