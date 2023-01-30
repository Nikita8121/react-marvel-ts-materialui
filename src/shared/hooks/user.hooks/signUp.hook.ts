import { useMutation } from "react-query";
import { signUp } from "../../services/apiService/userApiService/user.api.service";
import { ISignUpData } from "../../services/apiService/userApiService/user.api.service.types";

const useSignUp = () => {
  const { mutate } = useMutation({
    mutationFn: async ({ data }: { data: ISignUpData }) => signUp(data),
  });
  return { signUp: mutate };
};

export default useSignUp;
