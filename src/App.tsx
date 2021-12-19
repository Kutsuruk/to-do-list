import React, {ChangeEvent, FC, useState} from "react";
import {TextField, Button} from "@mui/material";
import {ITask} from "./types/types";

const App: FC = () => {

    const [task, setTask] = useState<string>('')
    const [status, setStatus] = useState<boolean>(false)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value)
    }

    const addTask = (e: any): void => {
        e.preventDefault()
        const newTask = {taskName: task, completed: status}
        setTodoList([...todoList, newTask])
        setTask('')
        console.log(todoList)
    }

    return(
        <div className="App">
            <div className="todo__header">

                <div className="header-input">
                    <TextField id="inputForm"
                               type="text"
                               label="Write task"
                               variant="standard"
                               onChange={handleChange}
                               value={task}
                    />
                    <Button variant="outlined"
                            size="small"
                            onClick={addTask}
                    >
                        Add
                    </Button>
                </div>

            </div>
            <div className="todo__main"></div>
        </div>
    )
}

export default App;