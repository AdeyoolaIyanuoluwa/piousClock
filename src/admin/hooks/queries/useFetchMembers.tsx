import { fetchMembers } from "@/admin/queries/user";
import { ALL_MEMBERS_QUERY_NAME } from "@/store/queryTypes";
import { useQuery } from "@tanstack/react-query";

export const useFetchMembers = ({ query, date, to_date }: { query: any, date: any, to_date: any }) => {
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

