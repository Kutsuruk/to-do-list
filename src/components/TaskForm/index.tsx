import { Formik } from 'formik';
import { FC } from 'react';
import { nanoid } from 'nanoid';
import { ITask } from 'core/types/task';
import { validationSchema, initialValues } from './formConfiguration';
import FormContent from './FormContent';
import SharedModal from '../../shared/Modal';

type TaskFormProps = {
	submitClickHandler: (task: ITask) => void;
};

const TaskForm: FC<TaskFormProps> = ({ submitClickHandler }) => (
	<SharedModal>
		<Formik
			initialValues={{ ...initialValues, id: nanoid() }}
			validationSchema={validationSchema}
			onSubmit={submitClickHandler}
		>
			<FormContent />
		</Formik>
	</SharedModal>
);

export default TaskForm;
