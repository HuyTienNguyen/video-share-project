import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import LoginForm from "./pages/login";
import RegisterForm from "./pages/register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
      </Routes>
    </div>
  );
}

export default App;
