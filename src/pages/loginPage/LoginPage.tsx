import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { MouseEvent } from "react";
import Box from "@mui/material/Box";
import SignUp from "../../components/signUp/SignUp";
import SignIn from "../../components/signIn/SignIn";

import useLoginPage from "./useLoginPage";
import type { toggleLogin } from "./useLoginPage";

interface ILoginToggler {
  handleTogglerChange: (
    event: MouseEvent<HTMLElement>,
    newValue: toggleLogin,
  ) => void;
  loginToggler: toggleLogin;
}

const LoginToggler = ({ handleTogglerChange, loginToggler }: ILoginToggler) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <ToggleButtonGroup
        color="primary"
        value={loginToggler}
        exclusive
        onChange={handleTogglerChange}
        aria-label="Platform"
      >
        <ToggleButton value="register">Register</ToggleButton>
        <ToggleButton value="login">login</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

const LoginPage = () => {
  const { handleTogglerChange, loginToggler } = useLoginPage();
  return (
    <>
      <LoginToggler
        handleTogglerChange={handleTogglerChange}
        loginToggler={loginToggler}
      />
      {loginToggler === "register" ? <SignUp /> : <SignIn />}
    </>
  );
};

export default LoginPage;
