import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { addMember } from "@/admin/queries/user";
import { useNavigate } from "react-router-dom";

export const useAddMember = () => {
  const { toast } = useAlert();
  const navigate = useNavigate()
  return useMutation({
    mutationFn: addMember,
    onSuccess: () => {
      toast({
        type: "success",
        message: "Member has been added successfully",
        title: "Member added",
      });
      navigate(-1)
    },
    onError: (error: { response: { data: { message: any } } }) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};
