import { fetchMembers } from "@/admin/queries/user";
import { useQuery } from "@tanstack/react-query";

export const useFetchMembers = ({ query }: { query: any }) => {
  return useQuery({
    queryKey: ['all_members', query.date, query.to_date ],
    queryFn: async () => {
      const data = await fetchMembers({ query });
      return data?.data?.data;
    },
    initialData: {
      members: [],
    },
  
  });
};

