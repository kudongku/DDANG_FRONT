import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import Signup from '../pages/auth/Signup';
import KakaoLogin from '../pages/auth/KakaoLogin';
import LocationSetting from '../pages/LocationSetting';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/Profile';
import CreateAuction from '../pages/auctions/CreateAuction';
import AuctionDetail from '../pages/auctions/AuctionDetail';
import NonPrivateRoute from './NonPrivateRoute';
export const routes = [
  {
    path: '/',
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: (
      <NonPrivateRoute>
        <Login />
      </NonPrivateRoute>
    ),
  },
  {
    path: '/create/auction',
    element: (
      <PrivateRoute>
        <CreateAuction />
      </PrivateRoute>
    ),
  },
  {
    path: '/auction/:auctionId',
    element: (
      <PrivateRoute>
        <AuctionDetail />
      </PrivateRoute>
    ),
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/auth/kakao',
    element: <KakaoLogin />,
  },
  {
    path: '/setting/location',
    element: (
      <PrivateRoute>
        <LocationSetting />
      </PrivateRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
  },
];
