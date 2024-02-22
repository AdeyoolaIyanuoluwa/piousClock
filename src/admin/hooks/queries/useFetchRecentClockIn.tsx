import { recentClockIns } from "@/admin/queries/user"
import { RECENT_CLOCKIN_QUERY_NAME } from "@/store"
import { useQuery } from "@tanstack/react-query"


export const useFetchRecentClockIn = () =>{
    return useQuery({
        queryKey: RECENT_CLOCKIN_QUERY_NAME,
        queryFn: async ()=>{
            const data = await recentClockIns()
            return data?.data?.data
        }
    })
}
