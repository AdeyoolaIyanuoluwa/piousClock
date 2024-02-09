import { ADD_MEMBER_API } from "@/services/api";
import instance from "@/services/axiosInstance";
import { urlToSearchParams } from '../../../utils/index';

export const addMember = (payload: object) =>
  instance.post(ADD_MEMBER_API, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });


  export const fetchMembers = ({ query }: { query: any }) =>
  instance.get(urlToSearchParams(`admin/fetch-members/`, query));