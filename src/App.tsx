import React, {useEffect, useState} from "react";
import axios from "axios";
import {ITodo} from "./types/types";
import TodoList from "./components/TodoList";

const App = () => {

    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return(
        <React.Fragment>
            <div className="app__wrapper">
                <h1 className='main__heading'>To-do List</h1>



                <TodoList todos={todos} />
            </div>
        </React.Fragment>
    )
}

export default App;