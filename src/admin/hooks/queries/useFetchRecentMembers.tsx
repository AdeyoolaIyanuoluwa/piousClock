import { fetchRecentMembers } from "@/admin/queries/user"
import {  RECENT_MEMBERS_QUERY_NAME } from "@/store"
import { useQuery } from "@tanstack/react-query"


export const useFetchRecentMembers =()=>{
    return useQuery({
        queryKey: RECENT_MEMBERS_QUERY_NAME,
        queryFn: async ()=>{
            const data = await fetchRecentMembers()
            return data?.data?.data
        }
    })
}