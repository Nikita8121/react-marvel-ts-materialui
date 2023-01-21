import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState, MouseEvent } from "react";

const LoginPage = () => {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (
    event: MouseEvent<HTMLElement>,
    newAlignment: string,
  ) => {
    setAlignment(newAlignment);
  };
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
    </>
  );
};

export default LoginPage;
