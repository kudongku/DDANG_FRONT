import api from "../../configs/axios";
import { LocationType, UserInfoResponse } from "../../types";

export const getUserInfoApi = async (): Promise<UserInfoResponse> => {
  const { data } = await api.get("/users/info");
  return data;
};

export const setLocationApi = async (request: LocationType) => {
  const response = await api.post("/users/location", request);
  return response;
};
