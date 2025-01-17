const express = require('express');
const router = express.Router();
const { Client } = require('pg');
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

router.get('/products', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching products:', err.message);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
