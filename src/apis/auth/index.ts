import axios from 'axios';
import { BASE_URL } from '../../constants';
import {
  AuthKakaoLoginRequest,
  AuthTokenResponse,
  AuthRefreshTokenRequest,
  AuthValidateEmailRequest,
  AuthValidateEmailResponse,
  AuthRequest,
} from '../../types';

export const refreshTokenApi = async (
  request: AuthRefreshTokenRequest
): Promise<AuthTokenResponse> => {
  const { data } = await axios.post<AuthTokenResponse>(BASE_URL + '/auth/refresh', request);
  return data;
};

export const kakaoLoginApi = async (request: AuthKakaoLoginRequest): Promise<AuthTokenResponse> => {
  const { data } = await axios.get<AuthTokenResponse>(BASE_URL + '/auth/authorization/kakao', {
    params: request,
  });
  return data;
};

export const signupApi = async (request: AuthRequest): Promise<AuthTokenResponse> => {
  const { data } = await axios.post<AuthTokenResponse>(BASE_URL + '/auth/signup', request);
  return data;
};

export const validateEmailApi = async (
  request: AuthValidateEmailRequest
): Promise<AuthValidateEmailResponse> => {
  const { data } = await axios.get<AuthValidateEmailResponse>(BASE_URL + '/auth/validate', {
    params: request,
  });
  return data;
};

export const loginApi = async (request: AuthRequest): Promise<AuthTokenResponse> => {
  const { data } = await axios.post<AuthTokenResponse>(BASE_URL + '/auth/login', request);
  return data;
};
