import { useNavigate } from "react-router-dom"
import useAlert from "../useAlert"
import { useMutation } from "@tanstack/react-query"
import { changePassword } from "@/admin/queries/auth"


export const useChangePassword =()=>{
    const {toast}= useAlert()
    const navigate = useNavigate()

    return useMutation({
        mutationFn: (payload: object)=> changePassword(payload),
        onSuccess: (res: { data: { code: number; message: string; }; }) => {
            if (res?.data?.code === 200) {
              toast({ type: 'success', message: res.data.message });
              navigate('/auth/login');
            }
          },
          onError: (error: any) => {
            toast({ type: 'error', message: error.response.data.message });
          },
    })
}