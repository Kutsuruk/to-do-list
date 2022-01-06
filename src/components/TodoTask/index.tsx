import React, { ChangeEvent, Dispatch, FC, SyntheticEvent, SetStateAction } from 'react';
import cx from 'classnames';
import { Checkbox, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DoneIcon from '@mui/icons-material/Done';
import { ITask } from '../../core/types/task';
import styles from './TodoTask.module.scss';
import { MuiStyle } from './muiStyles';

type TodoTaskProps = {
	task: ITask;
	completeToggle: (id: string, status: boolean) => void;
	deleteTask: (id: string) => void;
	editTask: (id: string) => void;
	todoEditingData: ITask | null;
	setEditedTodo: Dispatch<SetStateAction<ITask | null>>;
	setEditingText: (e: string) => void;
};
const useStyles = makeStyles(MuiStyle);

const TodoTask: FC<TodoTaskProps> = ({
	task,
	completeToggle,
	deleteTask,
	editTask,
	todoEditingData,
	setEditedTodo,
	setEditingText,
}) => {
	const classes = useStyles();

	const taskName = task.taskName.charAt(0).toUpperCase() + task.taskName.slice(1);

	const changeStatus = (_e: SyntheticEvent<Element, Event>, checked: boolean): void => {
		completeToggle(task.id, checked);
	};

	const deleteButtonClickHandler = () => deleteTask(task.id);
	const editButtonClickHandler = () => editTask(task.id);

	return (
		<div className={styles.taskItem}>
			<Checkbox checked={task.completed} className={cx(classes.checkboxStyle)} onChange={changeStatus} />

			{task.id === todoEditingData?.id ? (
				<TextField
					id="standard-basic"
					type="text"
					label="Rewrite task"
					variant="standard"
					className={cx(classes.editTaskField)}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setEditingText(e.target.value)}
				/>
			) : (
				<span
					className={cx({
						[classes.checkboxCompletedTaskStyle]: task.completed,
					})}
				>
					{taskName}
				</span>
			)}
			<IconButton
				aria-label="delete"
				onClick={deleteButtonClickHandler}
				className={cx(classes.deleteButtonStyle, {
					[classes.deleteButtonCompletedTaskStyle]: task.completed,
				})}
			>
				<DeleteIcon />
			</IconButton>

			{task.id === todoEditingData?.id ? (
				<IconButton aria-label="edit" onClick={editButtonClickHandler} className={cx(classes.doneButtonStyle)}>
					<DoneIcon />
				</IconButton>
			) : (
				<IconButton
					aria-label="edit"
					onClick={() => setEditedTodo(task)}
					className={cx(classes.editButtonStyle, {
						[classes.editButtonCompletedTaskStyle]: task.completed,
					})}
				>
					<EditIcon />
				</IconButton>
			)}
		</div>
	);
};

export default TodoTask;
