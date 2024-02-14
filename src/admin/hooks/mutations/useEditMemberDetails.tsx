import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { editMemberDetails } from "@/admin/queries/user";

export const useEditMemberDetails = ({
  id,
  setIsShown,
  refetch
}: {
  id: string;
  setIsShown: (val: boolean) => void;
  refetch: () => void;
}) => {
  const { toast } = useAlert();

  return useMutation({
    mutationFn: (data: any) => editMemberDetails(data, id),
    onSuccess: async (res) => {
      refetch();
      toast({ type: "success", message: res.data.message });
      setIsShown(false);
    },
    onError: (error: any) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};
