import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { addMember } from "@/admin/queries/user";

export const useAddMember = ({
  setIsShown,
  refetch
}: {
  setIsShown: (val: boolean) => void;
  refetch: () => void;
}) =>{
  const { toast } = useAlert();
  return useMutation({
    mutationFn: addMember,
    onSuccess: () => {
      refetch()
      toast({
        type: "success",
        message: "Member has been added successfully",
        title: "Member added",
      });
      setIsShown(false);
    },
    onError: (error: { response: { data: { message: any } } }) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};
