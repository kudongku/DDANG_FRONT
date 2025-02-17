// request
export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthRefreshTokenRequest {
  refreshToken: string;
}

export interface AuthKakaoLoginRequest {
  code: string;
}

export interface AuthValidateEmailRequest {
  email: string;
}

// response
export interface AuthTokenResponse {
  tokenType: string;
  token: string;
  refreshToken: string;
}

export interface AuthUserInfoResponse {
  email: string;
  address: string;
}

export interface AuthValidateEmailResponse {
  exist: boolean;
}
