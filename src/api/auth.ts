import { CreateUserInput } from "../types/user";
import axios from "axios";

export const signUp = async (data: CreateUserInput) => {
  try {
    const url = "https://f737-103-10-224-243.in.ngrok.io/api/signup";
    return await axios.post(url, data);
  } catch (error) {
    return error;
  }
};
