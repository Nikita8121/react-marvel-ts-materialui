import { useGetUserQuery } from "../../shared/hooks/user.api.hook";

const useProfile = () => {
  const { data } = useGetUserQuery();

  return { user: data };
};

export default useProfile;
