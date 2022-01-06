import React, { FC, useState } from 'react';
import { ITask } from 'core/types/task';
import TaskForm from 'components/TaskForm';
import TodoTask from 'components/TodoTask';
import SharedButton from 'shared/Button';
import styles from 'style/App.module.scss';

const App: FC = () => {
	const [todoList, setTodoList] = useState<ITask[]>([]);
	const [editingTodoList, setEditingTodoList] = useState<ITask | null>(null);
	const [editingTodoText, setEditingTodoText] = useState('');
	const [addNewTaskModalOpen, setAddNewTaskModalOpen] = useState(false);

	const addTask = (addedTask: ITask): void => {
		setTodoList([...todoList, addedTask]);
		setAddNewTaskModalOpen(false);
	};

	const completeToggleTask = (id: string, completed: boolean): void => {
		const newTodoList = todoList.map(task => (task.id === id ? { ...task, completed } : task));
		setTodoList(newTodoList);
	};

	const deleteTask = (id: string) => {
		const newTodoList = todoList.filter(task => task.id !== id);
		setTodoList(newTodoList);
	};

	const confirmEditTask = (id: string) => {
		const updatedTodos: ITask[] = todoList.map(todo => {
			if (todo.id === id) {
				const editedTodo: ITask = { ...todo, taskName: editingTodoText };
				return editedTodo;
			}
			return todo;
		});
		setTodoList(updatedTodos);
		setEditingTodoList(null);
	};

	return (
		<>
			<div className={styles.todoHeader}>
				<div className={styles.headerTitle}>To-do List</div>

				<div className={styles.headerInput}>
					<SharedButton clickHandler={() => setAddNewTaskModalOpen(true)} title="Add new task" />
					{addNewTaskModalOpen && <TaskForm submitClickHandler={addTask} />}
				</div>
			</div>
			<div className={styles.todoMain}>
				<div className="todoWrapper">
					<div className="taskWrapper">
						{todoList.map((task: ITask) => (
							<TodoTask
								key={task.id}
								task={task}
								completeToggle={completeToggleTask}
								deleteTask={deleteTask}
								editTask={confirmEditTask}
								todoEditingData={editingTodoList}
								setEditedTodo={setEditingTodoList}
								setEditingText={setEditingTodoText}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default App;
