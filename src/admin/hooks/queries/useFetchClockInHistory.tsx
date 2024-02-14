import { fetchClockInHistory } from "@/admin/queries/user"
import { CLOCK_IN_HISTORY_QUERY_NAME } from "@/store"
import { useQuery } from "@tanstack/react-query"


export const useFetchClockInHistory = ({query}:{query: any})=>{
    return useQuery({
        queryKey: CLOCK_IN_HISTORY_QUERY_NAME,
        queryFn: async ()=>{
            const data = await fetchClockInHistory({query})
            return data?.data?.data
        },
        initialData: {
            history: []
        }
    })
}