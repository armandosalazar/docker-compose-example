import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(morgan('dev'));

const db = await mongoose.connect('mongodb://mongo-db:27017/logs_db');
if (db.connection.readyState) {
    console.log('MongoDB connected successfully! 🎉');
}

const SchemaLog = new mongoose.Schema({
    id: String,
    message: String
});

const Log = mongoose.model('Log', SchemaLog);

app.get('/', function (req, res) {

    const log = new Log({ message: 'Successfully!' });

    console.log(log);

    log.save();

    return res.json(log);
})

export default app;