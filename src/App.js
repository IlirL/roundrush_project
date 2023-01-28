import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./pages/forgot-password/ForgotPassword";
import Login from "./pages/login/Login";
import SignUp from "./pages/sign-up/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
    </Routes>
  );
}

export default App;
