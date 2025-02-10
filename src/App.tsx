import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import KakaoLogin from "./pages/KakaoLogin";
import LocationSetting from "./pages/LocationSetting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/auth/kakao" element={<KakaoLogin />} />
        <Route path="/setting/location" element={<LocationSetting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
