import {
  Box,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent } from "react";
import SubmitButton from "./SubmitButton";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useForm } from "react-hook-form";
import { CreateUserInput } from "../types/user";
import { CreateUserInputSchema } from "../types/yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { userAction } from "../store/userSlice";
import "./Register.css";
import { signUp } from "../api/auth";

function Register() {
  const dispatch = useAppDispatch();
  const { registerForm } = useAppSelector((state) => state.entities.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateUserInput>({
    mode: "all",
    resolver: yupResolver(CreateUserInputSchema),
    defaultValues: registerForm,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    dispatch(
      userAction.setRegisterField({
        field: e.target.name,
        value: e.target.value,
      })
    );
  };
  const registerUser = async () => {
    const userData = await signUp(registerForm);
    console.log("response from backend", userData);
  };
  console.log("Register", register);
  console.log("registerForm", registerForm);

  return (
    <Box className="register-container">
      <Card
        variant="outlined"
        sx={{ maxWidth: 800, margin: "auto", borderRadius: 5 }}
      >
        <form onSubmit={handleSubmit(registerUser)}>
          <Typography variant="h4">Register Here</Typography>

          <CardContent>
            <Stack spacing={5} padding={2}>
              <TextField
                label={"First Name"}
                {...register("fistName")}
                value={registerForm.fistName}
                onChange={(e) => {
                  onChange(e);
                }}
                error={Boolean(errors.fistName)}
                helperText={
                  errors.fistName?.message ? errors.fistName?.message : null
                }
                FormHelperTextProps={{
                  filled: false,
                }}
              />
              <TextField
                label={"Last Name"}
                {...register("lastName")}
                value={registerForm.lastName}
                onChange={(e) => {
                  onChange(e);
                }}
                error={Boolean(errors.lastName)}
                helperText={
                  errors.lastName?.message ? errors.lastName?.message : null
                }
                FormHelperTextProps={{
                  filled: false,
                }}
              />
              <TextField
                label={"Email"}
                {...register("emailId")}
                value={registerForm.emailId}
                onChange={(e) => {
                  onChange(e);
                }}
                error={Boolean(errors.emailId)}
                helperText={
                  errors.emailId?.message ? errors.emailId?.message : null
                }
                FormHelperTextProps={{
                  filled: false,
                }}
              />
              <TextField
                label={"Mobile Number"}
                {...register("phoneNumber")}
                value={registerForm.phoneNumber}
                onChange={(e) => {
                  onChange(e);
                }}
                error={Boolean(errors.phoneNumber)}
                helperText={
                  errors.phoneNumber?.message
                    ? errors.phoneNumber?.message
                    : null
                }
                FormHelperTextProps={{
                  filled: false,
                }}
              />
              <TextField
                label={"Password"}
                {...register("password")}
                value={registerForm.password}
                onChange={(e) => {
                  onChange(e);
                }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password?.message ? errors.password?.message : null
                }
                FormHelperTextProps={{
                  filled: false,
                }}
              />
              <SubmitButton loading={false}>Register</SubmitButton>
            </Stack>
          </CardContent>
        </form>
      </Card>
    </Box>
  );
}

export default Register;
