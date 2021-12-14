import React, {FC} from 'react';
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: ITodo[];
}

const TodoList: FC<TodoListProps> = ({todos}) => {
    return (
        <div className='todo-list__wrapper'>
            {todos.map(todo =>
                <TodoItem key={todo.id} todo={todo} />
            )}
        </div>
    );
};

export default TodoList;