import React, { ChangeEvent, useMemo } from 'react';
import { TextField } from '@mui/material';
import { FieldInputProps, useFormikContext } from 'formik';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from './Input.module.scss';
import { MuiStyles } from './muiStyles';

type sharedInputProps = {
	customChangeHandler?: (value: string | number) => void;
	value?: string;
	field?: FieldInputProps<string | number>;
};

const useStyles = makeStyles(MuiStyles);

const SharedInput = ({ customChangeHandler, value, field }: sharedInputProps) => {
	const formikProps = useFormikContext<any>();

	const error = useMemo(
		() =>
			formikProps.errors &&
			formikProps.touched &&
			field &&
			formikProps.touched[field.name] &&
			formikProps.errors[field.name],
		[formikProps.errors, formikProps.touched]
	);

	const inputValue = value || (field ? field.value : '');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { target } = event;
		if (customChangeHandler) customChangeHandler(target.value);
		if (field) field.onChange(event);
	};

	const classes = useStyles();

	return (
		<div>
			<TextField
				className={cx(classes.inputField)}
				type="text"
				label="Write task"
				variant="standard"
				onChange={handleChange}
				value={inputValue}
				{...field}
			/>
			{error && <span className={styles.errorMessage}>{error}</span>}
		</div>
	);
};

export default SharedInput;
