import { loginUser } from "@/queries/auth";
import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContexts";
import { $storage } from "@/utils/storage";
import { LOGGED_IN } from "@/store";

export const useLogin = () => {
  const { toast } = useAlert();
  const navigate = useNavigate();
  const { userData, setUserData }: any = useUserContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
        toast({ type: "success", message: res.data.message });
        setUserData({ ...userData, ...res.data.data });
        $storage.save(LOGGED_IN, true);
        navigate("/dashboard");
    },
    onError: (error: any) => {
      toast({ type: 'error', message: error.response.data.message });
    },
  });
};
