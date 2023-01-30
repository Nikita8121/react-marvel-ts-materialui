import useGetUser from "../../shared/hooks/user.hooks/getUser.hook";

const useProfile = () => {
  const { user } = useGetUser();

  return { user };
};

export default useProfile;
