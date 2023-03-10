import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import useApp from "./useApp";
import theme from "../../muiTheme/Theme";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/homePage/HomePage";
import ComicsPage from "../../pages/comicsPage/ComicsPage";
import SingleComicPage from "../../pages/singleComicPage/SingleComicPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import ProfilePage from "../../pages/profilePage/ProfilePage";
import CartLink from "../cartLink/CartLink";
import Cart from "../cart/Cart";
import OrderPage from "../../pages/orderPage/OrderPage";

const App = () => {
  const { isLoading } = useApp();
  if (isLoading) {
    return <div> loading... </div>;
  }
  return (
    <SnackbarProvider maxSnack={5}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:id" element={<SingleComicPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/order" element={<OrderPage />} />
            </Route>
          </Routes>
          <Cart />
          <CartLink />
        </Router>
      </ThemeProvider>
    </SnackbarProvider>
  );
};

export default App;
