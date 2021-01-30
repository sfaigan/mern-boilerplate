import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

import { DeleteOutline } from "@material-ui/icons";

import { Task } from "../types";

interface TaskListItemProps {
  task: Task;
  onDeleteTask: (taskId: string) => Promise<void>;
}

const TaskListItem = (props: TaskListItemProps): JSX.Element => (
  <ListItem key={props.task._id}>
    <ListItemText
      primary={props.task.title}
      secondary={props.task.description}
    />
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        aria-label="delete"
        onClick={() => props.onDeleteTask(props.task._id)}
      >
        <DeleteOutline />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (taskId: string) => Promise<void>;
}

export const TaskList = (props: TaskListProps): JSX.Element => {
  console.log(props.tasks);

  return (
    <List>
      {props.tasks.map((task: Task) => (
        <TaskListItem task={task} onDeleteTask={props.onDeleteTask} />
      ))}
    </List>
  );
};
