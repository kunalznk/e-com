import { InferType } from "yup";
import { CreateUserInputSchema, LoginInputSchema } from "./yup";

export type CreateUserInput = InferType<typeof CreateUserInputSchema>;
export type LoginInput = InferType<typeof LoginInputSchema>;

