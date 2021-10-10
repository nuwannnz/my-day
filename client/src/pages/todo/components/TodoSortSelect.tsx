import React, { useEffect, useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

interface Props {
  onSortByChange: (sortBy: string) => void;
}
const TodoSortSelect: React.FunctionComponent<Props> = ({ onSortByChange }) => {
  const [sortBy, setSortBy] = useState("due-ascending");

  useEffect(() => {
    if (sortBy) {
      onSortByChange(sortBy);
    }
  }, [sortBy]);

  return (
    <div>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
            setSortBy(e.target.value as string)
          }
        >
          <MenuItem value={"due-ascending"}>Due date ascending</MenuItem>
          <MenuItem value={"due-descending"}>Due date descending</MenuItem>
          <MenuItem value={"created-ascending"}>
            Created date ascending
          </MenuItem>
          <MenuItem value={"created-descending"}>
            Created date descending
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default TodoSortSelect;
