import { fetchTotal } from "@/admin/queries/user";
import { TOTAL_CLOCKIN_CLOCKOUT_QUERY_NAME } from "@/store";
import { useQuery } from "@tanstack/react-query";

export const useFetchTotal = () => {
  return useQuery({
    queryKey: TOTAL_CLOCKIN_CLOCKOUT_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchTotal();
      return data?.data?.data;
    },
  });
};
