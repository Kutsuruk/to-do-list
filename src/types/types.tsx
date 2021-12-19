export type AddTodo = (newTodo: string) => void;
export type toggleComplete = (selectedTodo: ITodo) => void;

export interface ITodo {
    id : number;
    title: string;
    completed: boolean;
}