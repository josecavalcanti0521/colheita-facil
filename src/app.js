import express from 'express';
import dotenv from 'dotenv';
import colheitaRouter from './routes/colheitaRouter.js'

const app = express();
dotenv.config();

app.use(express.json());
app.use('/api', colheitaRouter);

export default app;
