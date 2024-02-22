import { fetchMember } from "@/queries/user";
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
