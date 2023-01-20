import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
/* import { ReactQueryDevtools } from "react-query-devtools"; */
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../muiTheme/Theme";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/homePage/HomePage";
import ComicsPage from "../../pages/comicsPage/ComicsPage";
import SingleComicPage from "../../pages/singleComicPage/SingleComicPage";
import SignUpPage from "../../pages/signUpPage/SignUpPage";

const queryClient = new QueryClient({});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route path="/comics/:id" element={<SingleComicPage />} />
              <Route path="/sign-up" element={<SignUpPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
      {/* <ReactQueryDevtools initialIsOpen /> */}
    </QueryClientProvider>
  );
}

export default App;
