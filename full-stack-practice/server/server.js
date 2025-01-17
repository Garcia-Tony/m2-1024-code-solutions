const express = require('express');
const app = express();
const cors = require('cors');
const { Client } = require('pg');
const port = process.env.PORT || 8080;


app.use(cors());

const client = new Client({
  user: 'dev', // Database user
  host: 'localhost',
  database: 'products',
  password: 'dev', // Your DB password here
  port: 5432,
});

client.connect();

app.get('/api/products', (req, res) => {
  client.query('SELECT * FROM products', (err, result) => {
    if (err) {
      console.error('Error with query:', err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Query Result:', result.rows); // Log the result for debugging
      res.json(result.rows); // Send the result as JSON
    }
  });
});

app.get('/api/products/:productId', async (req, res, next) => {
  console.log(req.params); // Debugging: Check req.params
  try {
    const { productId } = req.params;
    if (
      Number.isNaN(productId) ||
      !Number.isInteger(+productId) ||
      Number(productId) < 1
    ) {
      throw new ClientError(400, `productId invalid.`);
    }
    const sql = `
      select *
      from "products"
      where "productId" = $1;
    `;

    const params = [productId];
    const result = await client.query(sql, params);
    const [product] = result.rows;
    if (!product) {
      throw new ClientError(404, `productId ${productId} does not exist.`);
    }

    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
