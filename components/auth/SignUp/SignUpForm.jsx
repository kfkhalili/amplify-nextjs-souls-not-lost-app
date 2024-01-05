import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/system";
import { useForm, Controller } from "react-hook-form";

import handleSignUp from '@lib/auth/handleSignUp';

const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(2),

  "& .MuiTextField-root": {
    margin: theme.spacing(1),
    width: "300px",
  },
  "& .MuiButtonBase-root": {
    margin: theme.spacing(2),
  },
}));

const StyledGeneralError = styled('p')(({ theme }) => ({
  color: "red",
  fontWeight: "bold",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black"
}))

const SignUpForm = ({ handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = async ({ username, email, password }) => {
    await handleSignUp(username, email, password)
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="username"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Username"
            variant="filled"
            value={value}
            onChange={(e) => {
              clearErrors("general");
              onChange(e);
            }}
            error={!!error}
            helperText={error ? error.message : null}
          />
        )}
        rules={{ required: "Username required" }}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Email"
            variant="filled"
            value={value}
            onChange={(e) => {
              clearErrors("general");
              onChange(e);
            }}
            error={!!error}
            helperText={error ? error.message : null}
            type="email"
          />
        )}
        rules={{ required: "Email required" }}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Password"
            variant="filled"
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error ? error.message : null}
            type="password"
          />
        )}
        rules={{ required: "Password required" }}
      />
      {errors.general && (
        <StyledGeneralError>{errors.general.message}</StyledGeneralError>
      )}
      <div>
        <StyledButton type="submit" variant="contained" color="primary">
          Signup
        </StyledButton>
        <StyledButton variant="contained" onClick={handleClose}>
          Cancel
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default SignUpForm;
