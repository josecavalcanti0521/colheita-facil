import express from 'express';
import dotenv from 'dotenv';
import routes from './routes/colheitaRouter.js';

const app = express();
dotenv.config();

app.use('/colheita', routes);

export default app;
