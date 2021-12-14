import React, {useEffect, useState} from "react";
import axios from "axios";
import {ITodo} from "./types/types";
import TodoList from "./components/TodoList";
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

const App = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    function getRandomInt(): number  {
        return Math.floor(Math.random() * 15)
    }

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>(`https://jsonplaceholder.typicode.com/todos?_limit=${getRandomInt()}`)
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return(
        <React.Fragment>
            <div className="app__wrapper">
                <div className="heading__wrapper">
                    <h1 className='main__heading'>To-do List</h1>
                </div>
                <div className="input__wrapper">
                    <TextField id="standard-basic" label="Enter to-do" variant="standard" />
                    <Button variant="outlined">Add</Button>
                </div>
                <div className="todo-list__wrapper">
                    <TodoList todos={todos} />
                </div>
            </div>
        </React.Fragment>
    )
}

export default App;