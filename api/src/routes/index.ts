import express, { Router } from 'express';
import TodoRouter from './todo.routes';

export const initRouter = (): Router => {
    const router = express.Router();
    router.use('/todo', TodoRouter);
    return router;
}