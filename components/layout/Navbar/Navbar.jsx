'use client'

import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { withSnackbar } from "@components/ui/SnackbarHOC/SnackbarHOC";
import SignUpModal from '@components/auth/SignUp/SignUpModal';
//import SignInModal from '../../auth/SignIn/SignInModal';
//import UploadModal from './Upload/UploadModal';

//import AuthService from "../services/auth";

const logo = '/souls-not-lost-light.png'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  top: '0',
  backgroundColor: '#000'
}));

const StyledMenuButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  marginRight: theme.spacing(1),
}));

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  flexGrow: 1,
}));

const StyledLogo = styled('img')(({ theme }) => ({
  height: '70px'
}));

const Navbar = ({ snackbarMessageFunc }) => {
  const [openSignUp, setOpenSignUp] = useState(false);
  const handleOpenSignUp = () => setOpenSignUp(true);
  const handleCloseSignUp = () => setOpenSignUp(false);


  const [storedUser, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(storedUser ? true: false);
  const handleLogOut = () => {
    AuthService.logout()
    setUser({});
    setLoggedIn(false);
  }

  const [openLogin, setOpenLogin] = useState(false);
  const handleOpenLogin = () => setOpenLogin(true);
  const handleCloseLogin = () => setOpenLogin(false);

  const [openUpload, setOpenUpload] = useState(false);
  const handleOpenUpload = () => setOpenUpload(true);
  const handleCloseUpload = () => setOpenUpload(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <StyledAppBar position="static">
      <Toolbar>
        <StyledTitle variant="h6">
          <StyledLogo src={logo} alt="Souls Not Lost" />
        </StyledTitle>
        {loggedIn ?
        <>
        <StyledMenuButton color="inherit" onClick={handleOpenUpload}>
          Upload
        </StyledMenuButton>
        <StyledMenuButton color="inherit" onClick={handleLogOut}>
          Logout
        </StyledMenuButton>
        </>
        :
        <>
        <StyledMenuButton color="inherit" onClick={handleOpenSignUp}>
          Signup
        </StyledMenuButton>
        <StyledMenuButton color="inherit" onClick={handleOpenLogin}>
          Login
        </StyledMenuButton>
        </>
        }
      </Toolbar>
      <SignUpModal open={openSignUp} handleClose={handleCloseSignUp} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
    </StyledAppBar>
  );
};

/*      
<SignInModal open={openLogin} handleClose={handleCloseLogin} setLoggedIn={setLoggedIn} setUser={setUser} snackbarMessageFunc={snackbarMessageFunc} />
<UploadModal open={openUpload} handleClose={handleCloseUpload} snackbarMessageFunc={snackbarMessageFunc} />

*/

export default withSnackbar(Navbar);