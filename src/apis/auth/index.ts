import axios from 'axios';
import { BASE_URL } from '../../constants';
import {
  KakaoLoginRequest,
  KakaoLoginResponse,
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  SignupRequest,
  SignupResponse,
  ValidateEmailRequest,
  ValidateEmailResponse,
} from '../../types';

export const refreshTokenApi = async (
  request: RefreshTokenRequest
): Promise<RefreshTokenResponse> => {
  const { data } = await axios.post<RefreshTokenResponse>(BASE_URL + '/auth/refresh', request);
  return data;
};

export const kakaoLoginApi = async (request: KakaoLoginRequest): Promise<KakaoLoginResponse> => {
  const { data } = await axios.get<KakaoLoginResponse>(BASE_URL + '/auth/authorization/kakao', {
    params: request,
  });
  return data;
};

export const signupApi = async (request: SignupRequest): Promise<SignupResponse> => {
  const { data } = await axios.post<SignupResponse>(BASE_URL + '/auth/signup', request);
  return data;
};

export const validateEmailApi = async (
  request: ValidateEmailRequest
): Promise<ValidateEmailResponse> => {
  const { data } = await axios.get<ValidateEmailResponse>(BASE_URL + '/auth/validate', {
    params: request,
  });
  return data;
};

export const loginApi = async (request: LoginRequest): Promise<LoginResponse> => {
  const { data } = await axios.post<LoginResponse>(BASE_URL + '/auth/login', request);
  return data;
};
