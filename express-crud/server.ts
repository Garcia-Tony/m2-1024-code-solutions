import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();

app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `
      select *
      from "grades";
    `;
    const result = await db.query(sql);

    if (result.rows.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred'});
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const sql = `
      select "gradeId"
      from "grades"
      WHERE "gradeId" = $1;
    `;

    const { gradeId } = req.params;

    const result = await db.query(sql, [gradeId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Grade not found'});
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;

     if (!name) {
    return res.status(400).json({ error: 'name is required.' });
    }
     if (!course) {
    return res.status(400).json({ error: 'course is required.' });
 }
     if (!score) {
    return res.status(400).json({ error: 'score is required.' });
 }

 const sql = `
 insert into "grades" ("name", "course", "score")
 values ($1, $2, $3)
 returning *;
 `;

  const params = [name, course, score];
  const result = await db.query(sql, params);

  const [grades] = result.rows;
  if (!grades) {
    return res.status(500).json({ error: 'Failed to create grade.' });
  }
res.status(201).json(grades);
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});


app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;

    if (!gradeId) {
      return res.status(400).json({ error: 'gradeId is required.' });
    }
    if (!name) {
      return res.status(400).json({ error: 'name is required.' });
    }
    if (!course) {
      return res.status(400).json({ error: 'course is required.' });
    }
    if (!score) {
      return res.status(400).json({ error: 'score is required.' });
    }

    const sql = `
 update "grades"
 set "name" = $1,
 "course" = $2,
 "score" = $3
 where "gradeId" = $4
 returning *;
 `;

    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);

    const [grades] = result.rows;
    if (!grades) {
      return res.status(404).json({ error: 'Grade not found.' });
    }
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;

    if (!gradeId) {
      return res.status(400).json({ error: 'gradeId is required.' });
    }

    const sql = `
 delete from "grades"
 where "gradeId" = $1
 returning *;
 `;

    const params = [gradeId];
    const result = await db.query(sql, params);

    const [grades] = result.rows;
    if (!grades) {
      return res.status(404).json({ error: 'Grade not found.' });
    }
    res.status(200).json(grades);
  } catch (err) {
    res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});



app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
