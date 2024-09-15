const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile('Test');
});

app.get('/myTest', (req, res) => {
  res.sendFile('myTest123');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
