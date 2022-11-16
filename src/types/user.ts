import { InferType } from "yup";
import { CreateUserInputSchema, LoginInputSchema } from "./yup";

export type CreateUserInput = InferType<typeof CreateUserInputSchema>;
export type LoginInput = InferType<typeof LoginInputSchema>;

export enum ROLE {
  CUSTOMER = "CUSTOMER",
  SELLER = "SELLER",
  DELIVERY_PARTNER = "DELIVERY_PARTNER",
}
