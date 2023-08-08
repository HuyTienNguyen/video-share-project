import { Route, Routes } from "react-router-dom";
import "./App.css";
import { PrivateRoute } from "./layout/private-route";
import SharedVideoPage from "./pages/shared-video";
import NotFoundPage from "./pages/not-found";
import HomePage from "./pages/home";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<NotFoundPage />} />
        <Route
          path="/shared-video"
          element={
            <PrivateRoute>
              <SharedVideoPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
