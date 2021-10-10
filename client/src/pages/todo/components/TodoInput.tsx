import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

interface Props {
  isLoading: boolean;
  resetInput: boolean;
  onAddTodo: (title: string, endDate: Date) => void;
}
const TodoInput: React.FunctionComponent<Props> = ({
  isLoading,
  resetInput,
  onAddTodo,
}) => {
  const [todoTitle, setTodoTitle] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  useEffect(() => {
    if (resetInput) {
      console.log("resetting");
      setTodoTitle(null);
      setEndDate(new Date());
    }
  }, [resetInput]);

  const addClickHandler = () => {
    if (todoTitle && todoTitle.length > 0 && endDate) {
      onAddTodo(todoTitle, endDate);
    }
  };

  return (
    <div>
      <TextField
        id="todoInput"
        label="Todo"
        variant="outlined"
        value={todoTitle || ""}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="endDatePicker"
          label="End date"
          value={endDate}
          onChange={(date: Date | null) => setEndDate(date)}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </MuiPickersUtilsProvider>
      <Button
        variant="contained"
        color="primary"
        onClick={addClickHandler}
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add todo"}
      </Button>
    </div>
  );
};

export default TodoInput;
