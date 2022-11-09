import * as yup from "yup";

const fistName = yup.string().required().min(5).max(100);
const lastName = yup.string().required().min(5).max(100);
const password = yup
  .string()
  .required("Please Enter your password")
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
  )
  .min(8)
  .max(16);

const emailId = yup
  .string()
  .email("Please enter valid email id")
  .required()
  .min(5)
  .max(50);

const phoneNumber = yup
  .string()
  .required()
  .matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  )
  .min(10, "Number must be 10 digit")
  .max(10, "Number must be 10 digit");

export const CreateUserInputSchema = yup.object({
  fistName,
  lastName,
  emailId,
  password,
  phoneNumber,
});

export const LoginInputSchema = yup.object({
  emailId,
  password,
});
