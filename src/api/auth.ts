import { CreateUserInput } from "../types/user";
import axios from "axios";

export const signUp = async (data: CreateUserInput) => {
  try {
    const url = "https://0210-203-194-104-102.in.ngrok.io/api/signup";
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
