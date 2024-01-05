import React from 'react';
import { Dialog } from '@mui/material';
import SignInForm from './SignInForm';

export const SignInModal = ({ open, handleClose, setSignedIn, setUser, snackbarMessageFunc }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<SignInForm handleClose={handleClose} setSignedIn={setSignedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
		</Dialog>
	);
};

export default SignInModal;
