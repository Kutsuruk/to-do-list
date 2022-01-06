import * as yup from 'yup';

export const initialValues = {
	taskName: '',
	completed: false,
	id: '',
};

export const validationSchema = yup.object().shape({
	taskName: yup.string().required('Required').min(3, 'Min 3 charachters'),
});
