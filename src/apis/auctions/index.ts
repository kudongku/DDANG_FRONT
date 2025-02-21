import api from '..';
import { AuctionListResponse, AuctionRequest, AuctionResponse } from '../../types';

export const getAuctionListApi = async (page: number): Promise<AuctionListResponse> => {
  const { data } = await api.get('/auctions', {
    params: {
      page: page - 1,
      size: 10,
    },
  });
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
