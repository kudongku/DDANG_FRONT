import { useEffect, useState } from 'react';
import { getUserInfoApi } from '../apis/users';
import Header from '../components/Header';
import { AuthUserInfoResponse } from '../types';
import GrayBanner from '../components/GrayBanner';

export default function Home() {
  const [userInfo, setUserInfo] = useState<AuthUserInfoResponse>({
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
      <Header title="홈" />
      <GrayBanner>
        <span className="font-semibold">{userInfo.email}</span>님,
        <br />
        <span className="font-semibold">{userInfo.address}</span> 근처의 경매들입니다.
      </GrayBanner>
    </>
  );
}
