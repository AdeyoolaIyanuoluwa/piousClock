import { ADD_MEMBER_API, DELETE_MEMBER_API, EDIT_MEMBER_API, FETCH_RECENT_MEMBERS_API, FETCH_TOTAL_API } from "@/services/api";
import instance from "@/services/axiosInstance";
import { urlToSearchParams } from '../../../utils/index';

export const addMember = (payload: object) =>
  instance.post(ADD_MEMBER_API, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  export const editMemberDetails = (payload: object, id: string)=> instance.put(EDIT_MEMBER_API({id}),payload)
  export const deleteMemberDetails = (id: string)=>instance.delete(DELETE_MEMBER_API({id}))

  export const fetchMembers = ({ query }: { query: any }) =>
  instance.get(urlToSearchParams(`admin/fetch-members/`, query));

  export const fetchTotal = ()=> instance.get(FETCH_TOTAL_API)
  
  export const fetchClockInHistory = ({ query }: { query: any }) =>
  instance.get(urlToSearchParams(`admin/get-clocks-time/`, query));


  export const recentClockIns = ()=>instance.get('admin/get-recent-clock-in')
  export const fetchRecentMembers = ()=> instance.get(FETCH_RECENT_MEMBERS_API)
  