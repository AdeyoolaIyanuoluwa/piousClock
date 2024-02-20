import { fetchClockInHistory } from "@/admin/queries/user"
import { CLOCK_IN_HISTORY_QUERY_NAME } from "@/store"
import { useQuery } from "@tanstack/react-query"


export const useFetchClockInHistory = ({query, date, to_date}:{query: any, date: any, to_date: any})=>{
    return useQuery({
        queryKey: ['clockin_history',  query.date, query.to_date ],
        queryFn: async ()=>{
            const data = await fetchClockInHistory({query})
            return data?.data?.data
        },
        initialData: {
            history: []
        }
    })
}