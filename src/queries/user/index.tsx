import instance from "@/services/axiosInstance";
import { urlToSearchParams } from "../../utils/index";
import { CLOCK_IN_API, CLOCK_OUT_API } from "@/services/api";

export const fetchMember = ({ query }: { query: any }) =>
  instance.get(urlToSearchParams(`member/fetch-one-member/`, query));

export const clockInMembers = (id: any) => instance.post(CLOCK_IN_API({ id }), {name: 'Iyanu'});

export const clockOutMember = (id: any)=>instance.post(CLOCK_OUT_API({id}))
