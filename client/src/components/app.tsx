import React, { useEffect } from "react";
import { TaskList } from "./task-list";
import { NewTaskForm } from "./new-task-form";
import { useTasksAPI } from "../hooks";
import { Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

export const App = (): JSX.Element => {
  const classes = useStyles();
  const { tasks, getTasks, addTask, deleteTask } = useTasksAPI();

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <Container maxWidth="sm">
      <Paper className={classes.paper}>
        <Typography variant="h1">todo</Typography>
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        <NewTaskForm onAddTask={addTask} />
      </Paper>
    </Container>
  );
};
