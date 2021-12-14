import React, {FC, useState} from "react";
import {ITodo} from "../types/types";
import Checkbox from '@mui/material/Checkbox';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import '../styles/style.css';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {

    const [complete, setComplete] = useState(false)

    const handleComplete = () => {
        setComplete(!complete)
    }

    return(
        <div>
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
            </div>
        </div>
    )
}

export default TodoItem;