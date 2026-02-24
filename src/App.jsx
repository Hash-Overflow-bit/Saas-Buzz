import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import UnlockReport from "./Pages/UnlockReport";
import VerifyNumber from "./Pages/VerifyNumber";
import ForgetPassword from "./Pages/ForgetPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/unlock-report" element={<UnlockReport />} />
      <Route path="/verification" element={<VerifyNumber />}/>
      <Route path="/forgetpassword" element={<ForgetPassword/>} />
    </Routes>
  );
}

export default App;
