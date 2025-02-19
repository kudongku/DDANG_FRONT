import { useState, useEffect } from 'react';
import AuctionThumbnail from './AuctionThumbnail';
import { AuctionResponse } from '../types';
import { getAuctionListApi } from '../apis';
import InfiniteScroll from './InfiniteScroll';

export default function AuctionList() {
  const [auctions, setAuctions] = useState<AuctionResponse[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isLast, setIsLast] = useState(false);

  useEffect(() => {
    if (isLast) return;

    const getAuctionList = async () => {
      setLoading(true);
      try {
        const data = await getAuctionListApi(page);
        setAuctions((prev) => [...prev, ...data.auctions]);
        setIsLast(data.last);
      } catch (error) {
        console.error('Error fetching auction data:', error);
      } finally {
        setLoading(false);
      }
    };

    getAuctionList();
  }, [page, isLast]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <InfiniteScroll isLast={isLast} more={() => setPage((prev) => prev + 1)} loading={loading}>
        {auctions.map((auction) => {
          return <AuctionThumbnail key={auction.auctionId} auction={auction} />;
        })}
      </InfiniteScroll>
    </div>
  );
}
