import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginQuery } from "../../shared/hooks/user.api.hook";
import useUserStore from "../../store/userStore";
import { setAuthToken } from "../../shared/utils/authTokenUtils";

const useSignIn = () => {
  const { mutate, data } = useLoginQuery();
  const setIsloggedIn = useUserStore((state) => state.setIsloggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.access_token) {
      setIsloggedIn(true);
      setAuthToken(data.access_token);
      navigate("/profile");
    }
  }, [data]);
  return { signIn: mutate };
};

export default useSignIn;
