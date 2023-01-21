import { useEffect } from "react";
import { useSignUpQuery } from "../../shared/hooks/User.api.hook";

const useSignUp = () => {
  const { mutate, isSuccess } = useSignUpQuery();

  useEffect(() => {}, [isSuccess]);
  return { signUp: mutate };
};

export default useSignUp;
