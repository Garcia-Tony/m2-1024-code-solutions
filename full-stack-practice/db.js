const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

const query = async (text, params) => {
  const res = await pool.query(text, params);
  return res;
};

module.exports = { query };