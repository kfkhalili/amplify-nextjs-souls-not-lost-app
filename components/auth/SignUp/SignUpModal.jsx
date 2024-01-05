import React from 'react';
import { Dialog } from '@mui/material';
import SignUpForm from './SignUpForm';


const SignUpModal = ({ open, handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<SignUpForm handleClose={handleClose} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
		</Dialog>
	);
};

export default SignUpModal;