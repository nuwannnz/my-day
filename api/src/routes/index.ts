import { Application } from 'express';
import TodoRouter from './todo.routes';

export const initializeRoutes = (app: Application) => {
    app.use('/todo', TodoRouter);
}