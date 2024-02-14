import { fetchMember } from "@/queries/user";
import { ONE_MEMBER_QUERY_NAME } from "@/store/queryTypes";
import { useQuery } from "@tanstack/react-query";

export const useFetchMember = ({
  query,
  enabled,
  ...props
}: {
  query: any;
  enabled?: boolean;
}) => {
  return useQuery({
    queryKey: ONE_MEMBER_QUERY_NAME,
    queryFn: async () => {
      const data = await fetchMember({ query });
      return data?.data?.data;
    },
    initialData: {
      members: [],
    },
    ...props,
    enabled: false,
  });
};
