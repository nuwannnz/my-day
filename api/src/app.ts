import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import initializeDatabase from './config/db';
import { initRouter } from './routes';


const app = express();

// init db connection
initializeDatabase();

// common middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initialize routes
app.use('/api/v1/', initRouter());

export default app;