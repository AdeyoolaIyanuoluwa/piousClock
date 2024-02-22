import { fetchClockInHistory } from "@/admin/queries/user";
import { useQuery } from "@tanstack/react-query";

export const useFetchClockInHistory = ({
  query,
}: {
  query: any;
}) => {
  return useQuery({
    queryKey: ["clockin_history", query.date, query.to_date],
    queryFn: async () => {
      const data = await fetchClockInHistory({ query });
      return data?.data?.data;
    },
    initialData: {
      history: [],
    },
  });
};
