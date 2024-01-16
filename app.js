const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile('main.html', { root: __dirname });
});

app.get('/form', (req, res) => {
  res.sendFile('form.html', { root: __dirname  });
});

app.get('/api/products', (req, res) => {
  const products = JSON.parse(fs.readFileSync('products.json', 'utf8'));
  res.json(products);
});

app.post('/api/requestProduct', (req, res) => {
  const productId = req.body.productId; 
    res.json({ message: 'Product request received successfully.' });
});

app.post('/api/addProduct', (req, res) => {
  const newProduct = req.body; 
  res.json({ message: 'Product added successfully.' });
});

app.listen(8000, () => {
  console.log(`Server listening at http://localhost:`);
});
