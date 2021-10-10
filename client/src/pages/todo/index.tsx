import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { todoActions } from "../../store/todo/todo.slice";
import {
  createTodoAsync,
  deleteTodosAsync,
  fetchTodosAsync,
  updateTodoAsync,
} from "../../store/todo/todo.thunk";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import TodoSortSelect from "./components/TodoSortSelect";
import "./index.scss";

const TodoPage: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const { loading: todosLoading, data: todoList } = useSelector(
    (state: RootState) => state.todos.fetchTodos
  );

  const { loading: addTodoLoading, data: addTodoSuccess } = useSelector(
    (state: RootState) => state.todos.addTodo
  );

  const [sortedTodos, setSortedTodos] = useState<Todo[]>([]);
  const [sortBy, setSortBy] = useState<string>("due-ascending");

  useEffect(() => {
    dispatch(fetchTodosAsync());
  }, []);

  useEffect(() => {
    if (addTodoSuccess) {
      dispatch(todoActions.resetAddTodos);
    }
  }, [addTodoSuccess]);

  const handleAddTodo = (title: string, endDate: Date) => {
    dispatch(createTodoAsync({ title, endDate }));
  };

  const handleTodoDelete = (todoId: string) => {
    dispatch(deleteTodosAsync({ todoId }));
  };

  const handleTodoUpdate = (todo: Todo) => {
    const { title, status, endDate } = todo;
    const todoForUpdate = {
      title,
      status,
      endDate,
    };
    dispatch(updateTodoAsync({ todoId: todo._id, todo: todoForUpdate }));
  };

  useEffect(() => {
    if (!todoList) {
      return;
    }
    if (!sortBy) {
      return;
    }
    let sorted: Todo[] = [];
    switch (sortBy) {
      case "due-ascending":
        sorted = todoList
          .slice()
          .sort(
            (tA, tB) =>
              new Date(tA.endDate).getTime() - new Date(tB.endDate).getTime()
          );
        break;
      case "due-descending":
        sorted = todoList
          .slice()
          .sort(
            (tA, tB) =>
              new Date(tB.endDate).getTime() - new Date(tA.endDate).getTime()
          );
        break;
      case "created-ascending":
        sorted = todoList
          .slice()
          .sort(
            (tA, tB) =>
              new Date(tA.createdAt).getTime() -
              new Date(tB.createdAt).getTime()
          );
        break;
      case "created-descending":
        sorted = todoList
          .slice()
          .sort(
            (tA, tB) =>
              new Date(tB.createdAt).getTime() -
              +new Date(tA.createdAt).getTime()
          );
        break;
    }
    setSortedTodos(sorted);
  }, [sortBy, todoList]);

  return (
    <div className="todo-page">
      <TodoInput
        isLoading={addTodoLoading}
        resetInput={addTodoSuccess !== null}
        onAddTodo={handleAddTodo}
      />

      <div>
        <TodoSortSelect
          onSortByChange={(val) => {
            setSortBy(val);
          }}
        />
      </div>

      <TodoList
        todos={sortedTodos}
        loading={todosLoading}
        onTodoDelete={handleTodoDelete}
        onTodoStatusUpdate={handleTodoUpdate}
      />
    </div>
  );
};

export default TodoPage;
