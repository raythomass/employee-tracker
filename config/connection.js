const mysql = require('mysql2');
const { Connection } = require('mysql2/typings/mysql/lib/Connection');

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Rootpass17!',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  module.exports = connection;