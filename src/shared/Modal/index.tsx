import React, { FC } from 'react';
import { Dialog, DialogContent, styled } from '@mui/material';
import cx from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import { MuiStyles } from './muiStyles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

const useStyles = makeStyles(MuiStyles);

type SharedModalProps = {
	children: React.ReactNode;
};

const SharedModal: FC<SharedModalProps> = ({ children }) => {
	const [open, setOpen] = React.useState(true);

	const classes = useStyles();

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div className="modalWrapper">
			<BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
				<DialogContent className={cx(classes.modalContent)} dividers>
					{children}
				</DialogContent>
			</BootstrapDialog>
		</div>
	);
};

export default SharedModal;
