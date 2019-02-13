require('dotenv').config({ silent: true });

const express = require('express');
const next = require('next');

const port = +(process.env.PORT || 3000);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) {
      throw err;
    } else {
      console.log(`> Environment = ${process.env.NODE_ENV || 'development'}`);
      console.log(`> Ready on http://localhost:${port}`);
    }
  });
});
