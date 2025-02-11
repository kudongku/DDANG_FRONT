import { useEffect, useState } from 'react';
import api from '../apis/api';
import Header from '../components/Header';

export default function Home() {
  const [userInfo, setUserInfo] = useState({
    email: '',
    address: '',
  });

  const fetchUserInfo = async () => {
    const { data } = await api.get('users/info');
    setUserInfo(data);
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <>
      <Header title="홈" />
      <div>
        {userInfo.email}님, <br /> {userInfo.address} 근처의 경매들입니다.
      </div>
    </>
  );
}
