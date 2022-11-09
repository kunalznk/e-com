import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginInput } from "../types/user";
import { LoginInputSchema } from "../types/yup";

import { TextField, Stack } from "@mui/material";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { userAction } from "../store/userSlice"
import SubmitButton from "./SubmitButton";
import Loader from "./Loader";
import { setTimeout } from "timers/promises";

export const Login = () => {

  const [loading, setLoading] = useState<Boolean>(false);

  const dispatch = useAppDispatch();
  const { loginForm } = useAppSelector((state) => state.entities.user);


  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(userAction.setLoginField({
      field: e.target.name,
      value: e.target.value,
    }))
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginInput>({
    mode: "all",
    resolver: yupResolver(LoginInputSchema),
    defaultValues: loginForm,
  });

  const login = () => {
    setLoading(true)

    // setTimeout(()=>{
    //   setLoading(false)
      
    // },2000 )

    // set loading true
    // call api 
    // set loading false
    // if success clear form 
    // redirect to home page
    // if 1. server error  show in snackbar


    console.log(loginForm)
  }

  return <>
  {loading ? <Loader /> : null}
  {/* <Loader/> */}
    {<form onSubmit={handleSubmit(login)}>
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
        <SubmitButton loading={loading}>
          Submit
        </SubmitButton>
      </Stack>
    </form>}
  </>

}
