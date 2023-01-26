import { useMemo, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import MarvelIcon from "../../icons/MarvelIcon";
import useUserStore from "../../store/userStore";

interface IPage {
  name: string;
  path: string;
  protected?: boolean;
  isAvailableOnAuth?: boolean;
}

const pages: IPage[] = [
  { name: "Characters", path: "/" },
  { name: "Comics", path: "/comics" },
  { name: "Login", path: "/login", isAvailableOnAuth: false },
  { name: "Profile", path: "/profile", protected: true },
];
/* const settings = ["Profile", "Account", "Dashboard", "Logout"]; */

const AppHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  /* const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  ); */
  const IsloggedIn = useUserStore((state) => state.isLoggedIn);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  /* const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */

  const IsShowMenuItem = (page: IPage): boolean => {
    if (page.isAvailableOnAuth === undefined && page.protected === undefined)
      return true;
    if (page.protected && !IsloggedIn) {
      return false;
    }
    if (page.isAvailableOnAuth === false && IsloggedIn) {
      return false;
    }
    return true;
  };

  const filteredPages = useMemo(() => {
    return pages.filter((page) => IsShowMenuItem(page));
  }, [IsloggedIn]);

  return (
    <AppBar sx={{ backgroundColor: "primary.main" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink to="/">
            <MarvelIcon
              sx={{ fontSize: 60, display: { xs: "none", md: "flex" }, mr: 1 }}
              width="2500"
              height="1000"
              viewBox="0 0 500 200"
            />
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {filteredPages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <MarvelIcon
            width="2500"
            height="1000"
            viewBox="0 0 500 200"
            sx={{ fontSize: 60, display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {filteredPages.map((page) => (
              <Button
                key={page.name}
                component={NavLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  "&.active": {
                    backgroundColor: "black !important",
                  },
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default AppHeader;
