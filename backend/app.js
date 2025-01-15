import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello, World!').status(200);
});

export default app;
