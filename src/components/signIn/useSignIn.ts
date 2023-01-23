import { useEffect } from "react";
import { useLoginQuery } from "../../shared/hooks/user.api.hook";

const useSignIn = () => {
  const { mutate, isSuccess } = useLoginQuery();

  useEffect(() => {}, [isSuccess]);
  return { signIn: mutate };
};

export default useSignIn;
