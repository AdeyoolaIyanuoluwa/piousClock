import useAlert from "@/admin/hooks/useAlert";
import { clockInMembers, clockOutMember } from "@/queries/user"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom";


export const useClockInMembers = ()=>{
    const { toast } = useAlert();
    const navigate = useNavigate()
    return useMutation({
        mutationFn: clockInMembers,
        onSuccess: (res)=>{ 
            toast({type: 'success', message: res.data.message})
            // navigate(-1)
        },
        onError: (error: any) => {
            toast({ type: "error", message: error.response.data.message });
          },
    })
}

export const useClockOutMember = ()=>{
    const {toast} = useAlert()
    const navigate = useNavigate()
    return useMutation({
        mutationFn: clockOutMember,
        onSuccess: (res) =>{
            toast({type: 'success', message: res.data.message})
            // navigate(-1)
        },
        onError: (error: any)=>{
            toast({type: "error", message:error.response.data.message})
        }
    })
}