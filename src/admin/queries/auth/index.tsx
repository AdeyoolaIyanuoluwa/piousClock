import {
  CHANGE_PASSWORD_API,
  FORGOT_PASSWORD_API,
  LOGIN_API,
  RESET_PASSWORD_API,
  VALIDATE_PASSWORD_API,
} from "@/services/api";
import instance from "@/services/axiosInstance";

export const loginUser = (payload: { email: string; password: string }) =>
  instance.post(LOGIN_API, payload);

export const forgotPassword = (payload: { email: string }) =>
  instance.post(FORGOT_PASSWORD_API, payload);

export const validateOtp = (payload: { email: string; otp: string }) =>
  instance.post(VALIDATE_PASSWORD_API, payload);

export const resetPassword = (payload: { password: string; token: string }) => {
  const { password, token } = payload;
  return instance.post(
    RESET_PASSWORD_API,
    { password },
    {
      params: {
        token,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const changePassword = (payload: object) =>
  instance.post(CHANGE_PASSWORD_API, payload);
