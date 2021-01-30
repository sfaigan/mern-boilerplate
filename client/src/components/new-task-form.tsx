import { IconButton, InputBase, Paper } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { TaskAdd } from "../types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    display: "flex",
    padding: 0,
    paddingRight: "7px",
  },
  input: {
    paddingLeft: theme.spacing(2),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

interface NewTaskFormProps {
  onAddTask: (task: TaskAdd) => Promise<void>;
}

export const NewTaskForm = (props: NewTaskFormProps): JSX.Element => {
  const classes = useStyles();
  const [title, setTitle] = useState("");

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    props.onAddTask({ title });
    setTitle("");
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTitle(e.currentTarget.value);
  };

  return (
    <Paper variant="outlined" className={classes.root}>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.inputContainer}>
          <InputBase
            className={classes.input}
            placeholder="New Task"
            onChange={onChange}
            value={title}
            inputProps={{ "aria-label": "input new task title" }}
          />
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="add new task"
          >
            <Add />
          </IconButton>
        </div>
      </form>
    </Paper>
  );
};
