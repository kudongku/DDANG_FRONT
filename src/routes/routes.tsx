import Home from '../components/pages/HomePage';
import Login from '../components/pages/auth/LoginPage';
import Signup from '../components/pages/auth/SignupPage';
import KakaoLogin from '../components/pages/auth/KakaoLoginPage';
import LocationSetting from '../components/pages/LocationSettingPage';
import PrivateRoute from './PrivateRoute';
import Profile from '../components/pages/ProfilePage';
import CreateAuction from '../components/pages/auctions/CreateAuctionPage';
import AuctionDetail from '../components/pages/auctions/AuctionDetailPage';
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
