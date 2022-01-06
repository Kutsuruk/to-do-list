import React, { FC } from 'react';
import cx from 'classnames';
import { Button } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import { MuiStyles } from './muiStyles';

type SharedButtonProps = {
	clickHandler?: () => void;
	title: string;
	submit?: boolean;
};
const useStyles = makeStyles(MuiStyles);

const SharedButton: FC<SharedButtonProps> = ({ clickHandler, title, submit }) => {
	const classes = useStyles();

	return (
		<Button
			variant="outlined"
			size="small"
			color="success"
			type={submit ? 'submit' : 'button'}
			onClick={clickHandler}
			className={cx(classes.btnStyles)}
		>
			{title}
		</Button>
	);
};

export default SharedButton;
