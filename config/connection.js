const mysql = require('mysql2');

const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: 'root',
      password: 'Rootpass17!',
      database: 'employees_db',
      
      // socketPath: '/tmp/mysql.sock',
      // dialectOptions: {
      //   socketPath: '/tmp/mysql.sock',
      // }
    },
    console.log(`Connected to the employees_db database.`)
  );

  module.exports = db;