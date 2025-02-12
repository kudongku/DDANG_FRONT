import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import KakaoLogin from "../pages/KakaoLogin";
import LocationSetting from "../pages/LocationSetting";

export const routes = [
  {
    path: "/",
    element: Home,
  },
  {
    path: "/login",
    element: Login,
  },
  {
    path: "/signup",
    element: Signup,
  },
  {
    path: "/auth/kakao",
    element: KakaoLogin,
  },
  {
    path: "/setting/location",
    element: LocationSetting,
  },
];
