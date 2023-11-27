import express from 'express';
import morgan from 'morgan';
import { v4 as uuid } from 'uuid';

const app = express();

app.use(morgan('dev'));

app.get('/', function (req, res) {
    return res.json({ id: uuid() });
});

app.get('/hi', function (req, res) {
    return res.json({ message: 'Hi!' });
});

export default app;