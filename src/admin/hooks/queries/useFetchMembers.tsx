import { fetchMembers } from "@/admin/queries/user";
import { ALL_MEMBERS_QUERY_NAME } from "@/store/queryTypes";
import { useQuery } from "@tanstack/react-query";

export const useFetchMembers = ({ query }: { query: any }) => {
  return useQuery({
    queryKey: ALL_MEMBERS_QUERY_NAME,
    queryFn: async()=>{
    const data = await fetchMembers({ query})
     return data?.data?.data;
    },
    initialData:{
        members: []
    }
  });
};
