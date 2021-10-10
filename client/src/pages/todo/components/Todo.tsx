import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import "./Todo.scss";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/DeleteOutline";

interface Props {
  todo: Todo;
  onTodoDelete: (todoId: string) => void;
  onTodoStatusUpdate: (todo: Todo) => void;
}
const Todo: React.FunctionComponent<Props> = ({
  todo,
  onTodoDelete,
  onTodoStatusUpdate,
}) => {
  const handleDeleteClick = () => {
    onTodoDelete(todo._id);
  };

  const handleStatusChange = (checked: boolean) => {
    const updatedTodo = {
      ...todo,
      status: checked ? "COMPLETED" : "PENDING",
    };
    onTodoStatusUpdate(updatedTodo);
  };

  return (
    <Card className="todo">
      <CardContent>
        <div className="todo-details">
          <FormControlLabel
            control={
              <Checkbox
                checked={todo.status === "COMPLETED"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  handleStatusChange(event.target.checked)
                }
                name={todo.title}
              />
            }
            label={todo.title}
          />
          <div>
            <span>Due on: {new Date(todo.endDate).toDateString()}</span>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Todo;
