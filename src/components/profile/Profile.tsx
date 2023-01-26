import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useProfile from "./useProfile";

const Profile = () => {
  const { user } = useProfile();
  return (
    <Box sx={{ marginTop: "1rem" }}>
      <Typography variant="body2" component="span">
        {user?.email}
      </Typography>
    </Box>
  );
};

export default Profile;
