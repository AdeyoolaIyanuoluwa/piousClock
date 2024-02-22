import { bulkUpload } from "@/admin/queries/user";
import { BULK_UPLOAD_QUERY_NAME } from "@/store";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAlert from "../useAlert";

export const useBulkUpload = () => {
  const queryClient = useQueryClient();
  const { toast } = useAlert();
  return useMutation({
    mutationFn: async (payload) => await bulkUpload({ payload }),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [BULK_UPLOAD_QUERY_NAME],
      });
      toast({ type: "success", message:'uploaded successfully' });
    },
    onError: (error: any) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};
