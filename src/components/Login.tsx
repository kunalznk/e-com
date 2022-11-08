import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInput } from "../types/user";
import { LoginInputSchema } from "../types/yup";

import { TextField, Stack } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userAction } from "../store/userSlice"
import SubmitButton from "./SubmitButton";

export const Login = () => {
  
    const dispatch = useAppDispatch();
    const { loginForm } = useAppSelector((state) => state.entities.user);


    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        dispatch(userAction.setLoginField({
          [e.target.name]: e.target.value,
        }))
      };

    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInput>({
    mode: "onBlur",
    resolver: yupResolver(LoginInputSchema),
    defaultValues: loginForm,
  });

  const login = () => {
    // call api 
  } 

    return (
        <Stack spacing={4} padding={2}>
            <TextField
            label={"Email"}
            value={loginForm.emailId}
            {...register("emailId")}
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
            label={"Password"}
            value={loginForm.password}
            {...register("password")}
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
          <SubmitButton loading={false}>
            Submit
        </SubmitButton>
        </Stack>
    )
}