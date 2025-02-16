import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import { useAuth } from '../contexts/AuthContext';
import { UserInfoResponse } from '../types';
import { getUserInfoApi } from '../apis/users';
import GrayBanner from '../components/GrayBanner';

export default function Profile() {
  const { logout } = useAuth();
  const [userInfo, setUserInfo] = useState<UserInfoResponse>({
    email: '',
    address: '',
  });

  useEffect(() => {
    getUserInfoApi()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header title="프로필" />
      <GrayBanner>
        email : <span className="font-semibold">{userInfo.email}</span>
        <br />
        address : <span className="font-semibold">{userInfo.address}</span>
      </GrayBanner>
      <button
        className="wideButton red"
        onClick={() => {
          logout();
        }}
      >
        로그아웃
      </button>
    </>
  );
}
