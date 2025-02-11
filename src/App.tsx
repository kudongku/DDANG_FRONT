import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import KakaoLogin from "./pages/KakaoLogin";
import LocationSetting from "./pages/LocationSetting";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/auth/kakao" element={<KakaoLogin />} />
      <Route path="/setting/location" element={<LocationSetting />} />
    </Routes>
  );
}

export default App;
