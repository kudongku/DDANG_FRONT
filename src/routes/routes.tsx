import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import KakaoLogin from "../pages/KakaoLogin";
import LocationSetting from "../pages/LocationSetting";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

export const routes = [
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/auth/kakao",
    element: <KakaoLogin />,
  },
  {
    path: "/setting/location",
    element: (
      <PrivateRoute>
        <LocationSetting />
      </PrivateRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
];
