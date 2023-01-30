import useLogin from "../../shared/hooks/user.hooks/login.hook";

const useSignInComponent = () => {
  const { login } = useLogin();

  return { signIn: login };
};

export default useSignInComponent;
