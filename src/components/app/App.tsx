import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../muiTheme/Theme";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/homePage/HomePage";
import ComicsPage from "../../pages/comicsPage/ComicsPage";
import SingleComicPage from "../../pages/singleComicPage/SingleComicPage";
import LoginPage from "../../pages/loginPage/LoginPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});

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
              <Route path="/login" element={<LoginPage />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
