import express from 'express';
import mysql from 'mysql2/promise'; // promise permite usar async/await o promesas
import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

const app = express();

const connection = mysql.createPool({
  // Recordar que al usar docker-compose, se coloca el nombre de el servicio en lugar de localhost.
  // host: 'localhost',
  host: 'my-db', // docker-compose service name
  // https://es.stackoverflow.com/questions/524249/error-connect-econnrefused-127-0-0-13306-docker
  port: 3306,
  user: 'root',
  password: 'root',
  // database: 'node_api',
});


const response = await connection.query('SELECT 1 + 1 AS solution');
console.log(response);

const responseQueryTable = await connection.query('CREATE TABLE IF NOT EXISTS node_api.requests (id INT AUTO_INCREMENT PRIMARY KEY, date VARCHAR(255))');
console.log(`Result of query: ${responseQueryTable} 🔥`);
console.log(responseQueryTable);

// const mongoConnection = await mongoose.connect('mongodb://localhost/mydb');
// console.log(mongoConnection.connection.db.databaseName);

app.get('/', async (_req, res) => {
  // Aquí no puedo usar el await sin el async porque estoy dentro de una función
  const result = await connection.query(`INSERT INTO node_api.requests (date) VALUES ('${new Date().toLocaleString('es-MX', { timeZone: 'America/Mexico_City' })}')`);
  console.log();
  res.json({
    id: uuid(),
    name: 'John Doe',
    result
  });
}).listen(8080, () => {
  console.log('Server is running on port 8080 🦄');
});