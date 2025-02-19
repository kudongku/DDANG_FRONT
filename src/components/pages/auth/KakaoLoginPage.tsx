import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import { kakaoLoginApi } from '../../../apis';

export default function KakaoLogin() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  useEffect(() => {
    kakaoLoginApi({ code: code! })
      .then((data) => {
        login(data.tokenType + data.token, data.refreshToken);
        navigate('/');
      })
      .catch(() => navigate('/login'));
  }, [code, login, navigate]);

  return <div>loading...</div>;
}
