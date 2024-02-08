import ToastAlert from "../../components/ToastAlert";

const useAlert = () => {
  const toast = (options: any) => ToastAlert(options);
  return { toast };
};

export default useAlert;
