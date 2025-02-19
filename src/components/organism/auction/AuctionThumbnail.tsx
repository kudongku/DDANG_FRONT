import { AuctionResponse } from '../../../types';
import { useNavigate } from 'react-router-dom';

interface AuctionThumbnailProps {
  auction: AuctionResponse;
}

export default function AuctionThumbnail({ auction }: AuctionThumbnailProps) {
  const navigate = useNavigate();

  return (
    <div
      key={auction.auctionId}
      className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => navigate(`/auction/${auction.auctionId}`)}
    >
      <h3 className="text-lg font-semibold mb-2">{auction.title}</h3>
      <div className="text-sm text-gray-600 space-y-1">
        <p>작성자: {auction.writerEmail}</p>
        <p>위치: {auction.townName}</p>
        <p>작성일: {new Date(auction.createdAt).toLocaleDateString('ko-KR')}</p>
      </div>
    </div>
  );
}
