import React from "react";
import Todo from "./Todo";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./TodoList.scss";

interface Props {
  todos: Todo[];
  loading: boolean;
  onTodoDelete: (todoId: string) => void;
  onTodoStatusUpdate: (todo: Todo) => void;
}
const TodoList: React.FunctionComponent<Props> = ({
  todos,
  loading,
  onTodoDelete,
  onTodoStatusUpdate,
}) => {
  const events = { onTodoDelete, onTodoStatusUpdate };

  if (loading) {
    return (
      <div>
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo key={todo._id} todo={todo} {...events} />
      ))}
    </div>
  );
};

export default TodoList;
