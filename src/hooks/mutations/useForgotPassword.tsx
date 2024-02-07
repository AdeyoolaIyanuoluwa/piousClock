import { useNavigate } from "react-router-dom";
import useAlert from "../useAlert";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword, validateOtp } from "@/queries/auth";

export const useForgotPassword = () => {
  const { toast } = useAlert();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: forgotPassword,
    onSuccess: (res, context) => {
      localStorage.setItem("email", context.email);
      toast({ type: "success", message: res.data.message });
      navigate('/auth/otp');
    },
    onError: (error: any) => {
        toast({ type: 'error', message: error.response.data.message });
      },
  });
};
export const useOtp = () => {
    const { toast } = useAlert();
    const navigate = useNavigate();
  
    return useMutation({
      mutationFn: validateOtp,
      onSuccess: (res) => {
        const token = res?.data?.data?.token;
        toast({ type: 'success', message: res.data.message });
        navigate(`/auth/reset-password?token=${token}`);
      },
      onError: (error: any) => {
        toast({ type: 'error', message: error.response.data.message});
      },
    });
  };
