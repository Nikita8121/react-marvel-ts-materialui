import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "../../layouts/mainLayout/MainLayout";
import HomePage from "../../pages/homePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
