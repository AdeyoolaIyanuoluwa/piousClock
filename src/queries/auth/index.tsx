import {
  FORGOT_PASSWORD_API,
  LOGIN_API,
  VALIDATE_PASSWORD_API,
} from "@/services/api";
import instance from "@/services/axiosInstance";

export const loginUser = (payload: { email: string; password: string }) =>
  instance.post(LOGIN_API, payload);

export const forgotPassword = (payload: { email: string }) =>
  instance.post(FORGOT_PASSWORD_API, payload);

export const validateOtp = (payload: { email: string; otp: string }) =>
  instance.post(VALIDATE_PASSWORD_API, payload);
