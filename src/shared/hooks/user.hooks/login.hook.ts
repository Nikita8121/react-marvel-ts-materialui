import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/apiService/userApiService/user.api.service";
import { ISignUpData } from "../../services/apiService/userApiService/user.api.service.types";
import useUserStore from "../../../store/userStore";
import { setAuthToken } from "../../utils/authTokenUtils";

const useLogin = () => {
  const navigate = useNavigate();
  const setIsloggedIn = useUserStore((state) => state.setIsloggedIn);
  const { mutate } = useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signIn(data),
    onSuccess: (data) => {
      setIsloggedIn(true);
      setAuthToken(data.access_token);
      navigate("/profile");
    },
  });

  return { login: mutate };
};

export default useLogin;
