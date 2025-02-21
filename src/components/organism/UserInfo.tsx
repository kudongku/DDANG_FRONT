import { useState } from 'react';
import { useEffect } from 'react';
import GrayBanner from '../molecule/GrayBanner';
import { getUserInfoApi } from '../../apis';
import { AuthUserInfoResponse } from '../../types';

export default function UserInfo() {
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
    <GrayBanner>
      <span className="font-semibold">{userInfo.email}</span>님,
      <br />
      <span className="font-semibold">{userInfo.address}</span> 근처의 경매들입니다.
    </GrayBanner>
  );
}
