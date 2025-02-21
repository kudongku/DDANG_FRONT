import { AuctionResponse } from '../../types';
import { Link } from 'react-router-dom';
import SmText from './SmText';

interface AuctionThumbnailProps {
  auction: AuctionResponse;
}

export default function AuctionThumbnail({ auction }: AuctionThumbnailProps) {
  return (
    <Link
      to={`/auction/${auction.auctionId}`}
      className="border rounded-lg p-4 shadow-sm cursor-pointer hover:shadow-md transition-shadow hover:bg-blue-50"
    >
      <h3 className="text-lg font-semibold mb-2">{auction.title}</h3>
      <SmText string={`작성자: ${auction.writerEmail}`} />
      <SmText string={`위치: ${auction.townName}`} />
      <SmText string={`작성일: ${new Date(auction.createdAt).toLocaleDateString('ko-KR')}`} />
    </Link>
  );
}
