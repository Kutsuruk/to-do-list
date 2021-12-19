import React, {ChangeEvent, FC, useState} from "react";
import {TextField, Button} from "@mui/material";
import {ITask} from "./types/types";
import TodoTask from "./components/TodoTask";

const App: FC = () => {

    const [task, setTask] = useState<string>('')
    const [status, setStatus] = useState<boolean>(false)
    const [ID, setID] = useState<number>(0)
    const [todoList, setTodoList] = useState<ITask[]>([])

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTask(event.target.value)
    }

    const addTask = (e: any): void => {
        e.preventDefault()
        const newTask = {id: ID, taskName: task, completed: status}
        setTodoList([...todoList, newTask])
        setStatus(newTask.completed)
        setID(newTask.id)
        console.log(todoList)
    }

    const completeTask = (completedTaskName: string): void => {
        setTodoList(todoList.filter(task => {
            return task.taskName != completedTaskName
        }))
    }

    const generateKey = (pre: number): number => {
        return Number(`${ pre }_${ new Date().getTime() }`)
    }

    return (
        <div className="App">
            <div className="todo__header">
                <div className="header-title">
                    To-do List
                </div>

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
            <div className="todo__main">
                <div className="todo-wrapper">
                    <div className="task__wrapper">
                        {todoList.map((task: ITask) => {
                            return <TodoTask key={task.id} task={task} completeTask={completeTask}/>
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;