import { useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function AuctionDetail() {
  const { auctionId } = useParams();
  // todo. 경매 상세 페이지 구현
  return (
    <>
      <Header title="경매 상세" />
      <div>{auctionId}</div>
    </>
  );
}
