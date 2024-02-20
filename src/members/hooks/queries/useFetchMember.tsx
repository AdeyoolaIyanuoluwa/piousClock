import { fetchMember } from "@/queries/user";
import { ONE_MEMBER_QUERY_NAME } from "@/store/queryTypes";
import { useQuery } from "@tanstack/react-query";

export const useFetchMember = ({
  query,
  enabled,
  date,
  to_date,
  ...props
}: {
  query: any;
  enabled?: boolean;
  date: any;
  to_date: any;
}) => {
  return useQuery({
    queryKey: ["all_members", query.date, query.to_date],
    queryFn: async () => {
      const data = await fetchMember({ query });
      console.log(query);

      return data?.data?.data;
    },
    initialData: {
      members: [],
    },
    ...props,
    enabled: query?.search?.length > 0,
  });
};
