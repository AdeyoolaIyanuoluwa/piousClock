import { ADD_MEMBER_API } from "@/services/api";
import instance from "@/services/axiosInstance";

export const addMember = (payload: object) =>
  instance.post(ADD_MEMBER_API, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
