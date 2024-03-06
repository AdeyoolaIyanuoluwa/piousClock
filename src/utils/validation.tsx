import * as yup from "yup";

const atLeastOneUppercase = /[A-Z]/g;
const atLeastOneLowercase = /[a-z]/g;
const atLeastOneNumeric = /\d/g;
const atLeastOneSpecialChar = /[#?!@$%^&*-]/g;
const eightCharsOrMore = /.{8,}/g;
const pattern =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,30}$/;

export const SignInSchema = yup.object().shape({
  email: yup.string().email().trim().required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .min(8, "Can not be less than eight characters")
    .max(30, "Too Long")
    .matches(pattern, "Must be mixed with special characters"),
});

export const EmailSchema = yup.object().shape({
  email: yup.string().email().trim().required("email is required"),
});
export const PasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Can not be less than eight characters")
    .max(30, "Too Long")
    .matches(atLeastOneSpecialChar, "Must contain special character")
    .matches(atLeastOneUppercase, "Must contain uppercase")
    .matches(atLeastOneLowercase, "Must contain lowercase")
    .matches(eightCharsOrMore, "Must contain eight characters or more")
    .matches(atLeastOneNumeric, "Must Contain Number")
    .trim(),
  confirmPassword: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
});
export const ProfileSchema = yup.object({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  email: yup.string().email().trim().required("email is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),
  profile_image: yup.mixed()
   
});
export const EditMemberSchema = yup.object({
  first_name: yup.string().required("first name is required"),
  last_name: yup.string().required("last name is required"),
  email: yup.string().email().trim().required("email is required"),
  phone_number: yup
    .string()
    .required("Phone number is required")
    .matches(/^[0-9]{11}$/, "Invalid phone number"),
});
export const ChangePasswordSchema = yup.object().shape({
  old_password: yup
    .string()
    .required("Password is required")
    .min(8, "Can not be less than eight characters")
    .max(30, "Too Long")
    .matches(atLeastOneSpecialChar, "Must contain special character")
    .matches(atLeastOneUppercase, "Must contain uppercase")
    .matches(atLeastOneLowercase, "Must contain lowercase")
    .matches(eightCharsOrMore, "Must contain eight characters or more")
    .matches(atLeastOneNumeric, "Must Contain Number")
    .trim(),
  new_password: yup
    .string()
    .required("Password is required")
    .min(8, "Can not be less than eight characters")
    .max(30, "Too Long")
    .matches(atLeastOneSpecialChar, "Must contain special character")
    .matches(atLeastOneUppercase, "Must contain uppercase")
    .matches(atLeastOneLowercase, "Must contain lowercase")
    .matches(eightCharsOrMore, "Must contain eight characters or more")
    .matches(atLeastOneNumeric, "Must Contain Number")
    .trim(),
  confirm_password: yup
    .string()
    .required("Please confirm your password.")
    .oneOf([yup.ref("new_password")], "Your passwords do not match."),
});
