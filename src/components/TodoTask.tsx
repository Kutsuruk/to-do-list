import React, {useState} from "react";
import {ITask} from "../types/types";
import {Checkbox} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

interface TodoTaskProps {
    task: ITask;
    completeTask(completedTaskName: string): void;
}

const TodoTask = ({ task, completeTask }: TodoTaskProps) => {

    const [status, setStatus] = useState<boolean>(task.completed)

    const changeStatus = (e: any): void => {
        e.preventDefault()
        setStatus(!status)
    }

    return(
        <div className='task-item'>
            <Checkbox checked={task.completed}
                      onClick={changeStatus}
            />
            {task.taskName}
            <IconButton aria-label="delete" onClick={() => completeTask(task.taskName)}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}

export default TodoTask;