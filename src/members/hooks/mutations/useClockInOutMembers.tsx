import useAlert from "@/admin/hooks/useAlert";
import { clockInMembers, clockOutMember } from "@/queries/user";
import { useMutation } from "@tanstack/react-query";

export const useClockInMembers = () => {
  const { toast } = useAlert();
  return useMutation({
    mutationFn: clockInMembers,
    onSuccess: (res) => {
      toast({ type: "success", message: res.data.message });
    },
    onError: (error: any) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};

export const useClockOutMember = () => {
  const { toast } = useAlert();
  return useMutation({
    mutationFn: clockOutMember,
    onSuccess: (res) => {
      toast({ type: "success", message: res.data.message });
    },
    onError: (error: any) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};
