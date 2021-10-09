import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { initializeRoutes } from './routes';


const app = express();


// common middleware 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// initialize routes
initializeRoutes(app);

export default app;