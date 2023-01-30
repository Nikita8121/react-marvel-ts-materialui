import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useProfile from "./useProfile";

const Profile = () => {
  const { user } = useProfile();
  return (
    <Box
      sx={{
        marginTop: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="body2" component="span">
        email: {user?.email}
      </Typography>
      <Button variant="contained">Logout</Button>
    </Box>
  );
};

export default Profile;
