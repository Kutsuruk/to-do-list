import React, {FC, useState} from "react";
import {ITodo} from "../types/types";
import Checkbox from '@mui/material/Checkbox';
import '../styles/style.css';
import {IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

    const [complete, setComplete] = useState(false)

    const handleComplete = () => {
        setComplete(!complete)
    }

    return(
        <>
            <div
                className='todo-item__wrapper'
                key={todo.id}
            >
                <Checkbox
                    className='todo-item__checkbox'
                    defaultChecked={todo.completed}
                    onChange={handleComplete}
                />
                <span className='todo-item__title'>
                    {todo.title.charAt(0).toUpperCase() + todo.title.slice(1)}
                </span>
                <IconButton aria-label="delete" size="small">
                    <DeleteIcon fontSize="small" />
                </IconButton>
            </div>
        </>
    )
}

export default TodoItem;