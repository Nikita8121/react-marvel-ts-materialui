import { useGetUserQuery } from "../../shared/hooks/user.api.hook";

const useApp = () => {
  const { isLoading: isUserLoading } = useGetUserQuery();

  return { isLoading: isUserLoading };
};

export default useApp;
