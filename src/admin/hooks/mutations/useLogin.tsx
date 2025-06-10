import { loginUser } from "@/admin/queries/auth";
import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContexts";
import { $storage } from "@/utils/storage";
import { LOGGED_IN } from "@/store";

export const useLogin = () => {
  const { toast } = useAlert();
  const navigate = useNavigate();
  const { memberData, setMemberData }: any = useUserContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast({ type: "success", message: res.data.message });
      setMemberData({ ...memberData, ...res.data.data });
      $storage.save(LOGGED_IN, true);
      navigate("/dashboard");
    },
    onError: () => {
      toast({ type: "error", message: "Invalid Login Credentials" });
    },
  });
};

