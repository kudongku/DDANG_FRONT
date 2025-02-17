import api from '../../configs/axios';
import { AuctionListResponse, CreateAuctionRequest } from '../../types';
import { AuctionDetailResponse } from '../../types';

export const getAuctionListApi = async (): Promise<AuctionListResponse> => {
  const { data } = await api.get('/auctions');
  return data;
};

export const getAuctionDetailApi = async (auctionId: string): Promise<AuctionDetailResponse> => {
  const { data } = await api.get(`/auctions/${auctionId}`);
  return data;
};

export const createAuctionApi = async (request: CreateAuctionRequest) => {
  const { data } = await api.post('/auctions', request);
  return data;
};
