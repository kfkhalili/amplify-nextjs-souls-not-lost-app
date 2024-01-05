import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import { useForm, Controller } from "react-hook-form";

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


const SignInForm = ({ handleClose, setLoggedIn, setUser, snackbarMessageFunc }) => {
  const {
    handleSubmit,
    control,
    setError,
    formState: { errors },
    clearErrors,
  } = useForm({ reValidateMode: "onChange" });

  const onSubmit = ({ usernameOrEmail, password }) => {
    AuthService.login(usernameOrEmail, password).then(
      (loginRes) => {
        setLoggedIn(true);
        setUser(localStorage.getItem("user"));
        snackbarMessageFunc(`${loginRes.username} logged in | أهلا وسهلا`);
        handleClose();
      },
      (error) => {
        setError("general", {
          type: "manual",
          message: error.response.data,
        });
      }
    );
  };

  return (
    <StyledForm component="form" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="usernameOrEmail"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextField
            label="Username or email"
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
        rules={{ required: "Username or email required" }}
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
          Login
        </StyledButton>
        <StyledButton variant="contained" onClick={handleClose}>
          Cancel
        </StyledButton>
      </div>
    </StyledForm>
  );
};

export default SignInForm;
