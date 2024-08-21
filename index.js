// index.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Vaibhav says hello');
});

app.listen(port, '18.232.112.182', () => {
  console.log(`Server running at http://18.232.112.182:${port}/`);
});
