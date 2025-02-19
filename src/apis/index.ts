import axios from 'axios';
import { BASE_URL } from '../constants';
import { refreshTokenApi } from './auth';
import useAuth from '../hooks/useAuth';

export * from './auth';
export * from './users';
export * from './auctions';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 1000000,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
      config.headers.Authorization = `${token}`;
    }

    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response?.status === 401) {
      const originalRequest = error.config;

      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          const data = await refreshTokenApi({ refreshToken });
          localStorage.setItem('accessToken', data.tokenType + data.token);
          originalRequest.headers.Authorization = `data.tokenType + data.token`;
          return api(originalRequest);
        } else {
          window.location.href = '/login';
        }
      } catch (refreshError) {
        const { logout } = useAuth();
        logout();
        console.error('토큰 갱신 실패:', refreshError);
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  }
);

export default api;
