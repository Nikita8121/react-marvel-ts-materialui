import { useEffect } from "react";
import { useSignUpQuery } from "../../shared/hooks/user.api.hook";

const useSignUp = () => {
  const { mutate, isSuccess } = useSignUpQuery();

  useEffect(() => {}, [isSuccess]);
  return { signUp: mutate };
};

export default useSignUp;
