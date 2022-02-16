import { FC } from 'react';
import { Field, Form } from 'formik';
import Button from 'shared/Button';
import SharedInput from 'shared/Input';
import styles from './FormContent.module.scss';

const FormContent: FC = () => (
	<Form className={styles.formContentWrapper}>
		<Field className={styles.formContentField} name="taskName" component={SharedInput} />
		<div className={styles.btnWrapper}>
			<Button title="Confirm" submit />
		</div>
	</Form>
);

export default FormContent;
