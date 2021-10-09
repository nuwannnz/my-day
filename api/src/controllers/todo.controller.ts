import { Request, Response, NextFunction } from 'express';
import TodoService from '../services/todo.service';

export default class TodoController {

    private todoService = new TodoService();

    async postTodo(req: Request, res: Response, next: NextFunction) {

    }


    async getAllTodo(req: Request, res: Response, next: NextFunction) {

    }


    async putTodo(req: Request, res: Response, next: NextFunction) {

    }


    async deleteTodo(req: Request, res: Response, next: NextFunction) {

    }
}
