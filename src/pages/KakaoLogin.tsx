import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

export default function KakaoLogin() {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code');

  axios
    .get(baseUrl + `/auth/authorization/kakao?code=${code}`)
    .then(({ data }) => {
      localStorage.setItem('accessToken', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      navigate('/');
    })
    .catch(() => navigate('/login'));

  return <div>loading...</div>;
}
