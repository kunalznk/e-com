import { CreateUserInput, LoginInput } from "./../types/user";
import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
} from "@reduxjs/toolkit";
// import CONSTANTS from "../static/constants";

interface USER {
  loginForm: LoginInput;
  registerForm: CreateUserInput;
}
const userSlice = createSlice<USER, SliceCaseReducers<USER>>({
  name: "USER",
  initialState: {
    loginForm: {
      emailId: "",
      password: "",
    },

    registerForm: {
      emailId: "",
      firstName: "",
      lastName: "",
      password: "",
      phoneNumber: "",
      role: "",
    },
  },
  reducers: {
    setLoginField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      const loginForm = { ...state.loginForm, [field]: value };
      state.loginForm = loginForm;
    },

    setLoginForm: (state, action: PayloadAction<LoginInput>) => {
      state.loginForm = action.payload;
    },

    setRegisterField: (
      state,
      action: PayloadAction<{ field: string; value: string }>
    ) => {
      const { field, value } = action.payload;
      const registerForm = { ...state.registerForm, [field]: value };
      state.registerForm = registerForm;
    },
  },
});

export default userSlice.reducer;
export const userAction = userSlice.actions;
