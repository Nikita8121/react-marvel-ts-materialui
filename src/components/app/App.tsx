import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import useApp from "./useApp";
import theme from "../../muiTheme/Theme";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/homePage/HomePage";
import ComicsPage from "../../pages/comicsPage/ComicsPage";
import SingleComicPage from "../../pages/singleComicPage/SingleComicPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import ProfilePage from "../../pages/profilePage/ProfilePage";

const App = () => {
  const { isLoading } = useApp();
  if (isLoading) {
    return <div> is loading </div>;
  }
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:id" element={<SingleComicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
