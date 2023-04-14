const {Pool} = require('pg');

const connection = new Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

connection.connect();
connection.query('SELECT NOW()', (err, res) => {
    console.log(err ? err.stack : res.rows[0])
  });

module.exports = {
  connection
};