import { deleteMemberDetails } from "@/admin/queries/user";
import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";

export const useDeleteMember = ({
  id,
  refetch,
  setIsShown,
}: {
  id: string;
  setIsShown: (val: boolean) => void;
  refetch: () => void;
}) => {
  const { toast } = useAlert();
  return useMutation({
    mutationFn: () => deleteMemberDetails(id),
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
