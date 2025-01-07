# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  The pg NPM package is a PostgreSQL client for Node.js. It allows you to connect to a PostgreSQL database, execute SQL queries, and manage database interactions from within a Node.js application.

- How do you tell `pg` which database to connect to?
  Provide connection details like the database host, user, password, and database name.

- How do you send SQL to PostgreSQL from your Express server?
  pg client

- How do you access the rows that get returned from the SQL query?
  The rows returned from a SQL query in pg can be accessed through the rows property of the result object returned by the query() method.

- What must you always remember to put around your asynchronous route handlers? Why?
  try and catch. Async functions in JavaScript return promises. If an error occurs in an async function, it will be returned as a rejected promise.

- What is a SQL Injection Attack and how do you avoid it in `pg`?
  A SQL Injection attack occurs when an attacker is able to insert or manipulate SQL queries through user input, often leading to unauthorized data access, deletion, or modification. Therefore, it is a very bad practice to insert values into the SQL using ${variable}. They must first be sanitized by escaping characters that will be interpreted by the SQL engine. ($1, $2, etc.)

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
