import api from '../../configs/axios';
import { AuctionListResponse, AuctionRequest, AuctionResponse } from '../../types';

export const getAuctionListApi = async (): Promise<AuctionListResponse> => {
  const { data } = await api.get('/auctions');
  return data;
};

export const getAuctionDetailApi = async (auctionId: string): Promise<AuctionResponse> => {
  const { data } = await api.get(`/auctions/${auctionId}`);
  return data;
};

export const createAuctionApi = async (request: AuctionRequest) => {
  const { data } = await api.post('/auctions', request);
  return data;
};
