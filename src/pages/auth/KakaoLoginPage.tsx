import { useLocation, useNavigate } from 'react-router-dom';
import { kakaoLoginApi } from '../../apis/auth';
import { useEffect } from 'react';

export default function KakaoLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  useEffect(() => {
    kakaoLoginApi({ code: code! })
      .then((data) => {
        localStorage.setItem('accessToken', data.tokenType + data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
        navigate('/');
      })
      .catch(() => navigate('/login'));
  }, [code, navigate]);

  return <div>loading...</div>;
}
