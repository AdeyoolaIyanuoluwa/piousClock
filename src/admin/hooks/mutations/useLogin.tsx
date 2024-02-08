import { loginUser } from "@/admin/queries/auth";
import { useMutation } from "@tanstack/react-query";
import useAlert from "../useAlert";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "@/context/userContexts";
import { $storage } from "@/utils/storage";
import { LOGGED_IN } from "@/store";

export const useLogin = () => {
  const { toast } = useAlert();
  const navigate = useNavigate();
  const { userData, setUserData }: any = useUserContext();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (res) => {
      toast({ type: "success", message: res.data.message });
      setUserData({ ...userData, ...res.data.data });
      $storage.save(LOGGED_IN, true);
      navigate("/dashboard");
    },
    onError: (error: any) => {
      toast({ type: "error", message: error.response.data.message });
    },
  });
};

// addMember({
//   first_name: values.first_name,
//   last_name: values.last_name,
//   email: values.email,
//   phone_number: `+234${String(parseInt(values.phone_number))}`,
//   profile_image: values.profile_image,
// });

// const changeFile = ({ file, formik }: { file: File; formik: FormikValues }) => {
//   var reader = new FileReader();
//   reader.addEventListener("load", (event) => {
//     formik.setFieldValue('profile_image', event.target.result)
//     console.log(event.target.result);
//   });

//   reader.readAsDataURL(file);
// };
