import useSignUp from "../../shared/hooks/user.hooks/signUp.hook";

const useSignUpComponent = () => {
  const { signUp } = useSignUp();

  return { signUp };
};

export default useSignUpComponent;
