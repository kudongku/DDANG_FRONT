// request
export interface AuctionRequest {
  title: string;
  content: string;
}

// response
export interface AuctionResponse {
  auctionId: string;
  title: string;
  content: string;
  writerEmail: string;
  townName: string;
  createdAt: Date;
}

export interface AuctionListResponse {
  auctions: AuctionResponse[];
  last: boolean;
}

export interface AuctionCreateResponse {
  auctionId: string;
}
