import React, { ReactElement } from "react";
import Container from "@mui/material/Container";
import { Outlet } from "react-router-dom";
import AppHeader from "../../components/appHeader/AppHeader";

const MainLayout = (): ReactElement => {
  return (
    <>
      <AppHeader />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
