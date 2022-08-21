import express from 'express';
import mysql from 'mysql2/promise'; // promise permite usar async/await o promesas
import mongoose from 'mongoose';

const app = express();

// const connection = mysql.createPool({
//     host: 'localhost',
//     port: 7777,
//     user: 'root',
//     password: '12345',

// });


// const response = await connection.query('SELECT 1 + 1 AS solution');
// console.log(response);

// const mongoConnection = await mongoose.connect('mongodb://localhost/mydb');
// console.log(mongoConnection.connection.db.databaseName);

app.get('/', (_req, res) => {
    res.send('Hello World');
});

app.listen(8080);
console.clear();
console.log('Server is running on port 8080');