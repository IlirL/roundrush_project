import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
