import api from '..';
import { LocationType, AuthUserInfoResponse } from '../../types';

export const getUserInfoApi = async (): Promise<AuthUserInfoResponse> => {
  const { data } = await api.get('/users/info');
  return data;
};

export const setLocationApi = async (request: LocationType) => {
  const response = await api.post('/users/location', request);
  return response;
};
