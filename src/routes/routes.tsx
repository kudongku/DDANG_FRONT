import Home from '../pages/HomePage';
import Login from '../pages/auth/LoginPage';
import Signup from '../pages/auth/SignupPage';
import KakaoLogin from '../pages/auth/KakaoLoginPage';
import LocationSetting from '../pages/LocationSettingPage';
import PrivateRoute from './PrivateRoute';
import Profile from '../pages/ProfilePage';
import CreateAuction from '../pages/auctions/CreateAuctionPage';
import AuctionDetail from '../pages/auctions/AuctionDetailPage';
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
