import * as yup from 'yup';

const atLeastOneUppercase = /[A-Z]/g;
const atLeastOneLowercase = /[a-z]/g;
const atLeastOneNumeric = /\d/g;
const atLeastOneSpecialChar = /[#?!@$%^&*-]/g;
const eightCharsOrMore = /.{8,}/g;
const pattern =
  /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,30}$/;
  
export const SignInSchema = yup.object().shape({
    email: yup.string().email().trim().required('email is required'),
    password: yup
      .string()
      .required('password is required')
      .min(8, 'Can not be less than eight characters')
      .max(30, 'Too Long')
      .matches(pattern, 'Must be mixed with special characters'),
  });

  export const EmailSchema = yup.object().shape({
    email: yup.string().email().trim().required('email is required')
  });
  export const PasswordSchema = yup.object().shape({
    password: yup
      .string()
      .required('Password is required')
      .min(8, 'Can not be less than eight characters')
      .max(30, 'Too Long')
      .matches(atLeastOneSpecialChar, 'Must contain special character')
      .matches(atLeastOneUppercase, 'Must contain uppercase')
      .matches(atLeastOneLowercase, 'Must contain lowercase')
      .matches(eightCharsOrMore, 'Must contain eight characters or more')
      .matches(atLeastOneNumeric, 'Must Contain Number')
      .trim(),
    confirmPassword: yup
      .string()
      .required('Please confirm your password.')
      .oneOf([yup.ref('password')], 'Your passwords do not match.')
  });