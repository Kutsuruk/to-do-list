import React, {
  FC,
  useState,
  MouseEvent,
  MouseEventHandler,
  ChangeEvent,
} from "react";
import { Task } from "../../core/types/types";
import { Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import styles from "./TodoTaskl.module.scss";

type TodoTaskProps = {
  task: Task;
  completeTask: (completedTaskName: string) => void;
};

const TodoTask: FC<TodoTaskProps> = ({ task, completeTask }) => {
  const [status, setStatus] = useState<boolean>(task.completed);

  const changeStatus = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setStatus(!status);
  };

  return (
    <div className={styles.task_item}>
      <Checkbox checked={task.completed} onClick={changeStatus} />
      {task.taskName}
      <IconButton
        aria-label="delete"
        onClick={() => completeTask(task.taskName)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

export default TodoTask;
