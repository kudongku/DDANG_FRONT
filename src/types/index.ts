export interface LocationType {
  address: string;
  latitude: number;
  longitude: number;
}

export interface RefreshTokenRequest {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  tokenType: string;
  token: string;
  refreshToken: string;
}

export interface UserInfoResponse {
  email: string;
  address: string;
}

export interface KakaoLoginRequest {
  code: string;
}

export interface KakaoLoginResponse {
  tokenType: string;
  token: string;
  refreshToken: string;
}

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  tokenType: string;
  token: string;
  refreshToken: string;
}

export interface ValidateEmailRequest {
  email: string;
}

export interface ValidateEmailResponse {
  exist: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  tokenType: string;
  token: string;
  refreshToken: string;
}

export interface AuctionListResponse {
  auctions: AuctionDetailResponse[];
}

export interface AuctionDetailResponse {
  title: string;
  content: string;
}

export interface CreateAuctionRequest {
  title: string;
  content: string;
}

export interface CreateAuctionResponse {
  auctionId: string;
}
