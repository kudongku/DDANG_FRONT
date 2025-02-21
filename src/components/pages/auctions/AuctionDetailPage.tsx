import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { AuctionResponse } from '../../../types';
import { getAuctionDetailApi } from '../../../apis';
import Header from '../../molecule/Header';

export default function AuctionDetail() {
  const navigate = useNavigate();
  const { auctionId } = useParams<{ auctionId: string }>();
  const [auction, setAuction] = useState<AuctionResponse | null>(null);

  useEffect(() => {
    if (auctionId) {
      const fetchData = async () => {
        const result = await getAuctionDetailApi(auctionId);
        setAuction(result);
      };
      fetchData();
    } else {
      navigate('/');
    }
  }, [auctionId, navigate]);

  return (
    <>
      <Header title="경매 상세" />
      {auction && (
        <>
          <div className="p-4 rounded-lg mx-4 my-4">
            <h1 className="text-2xl font-bold mb-4">{auction.title}</h1>
          </div>

          <div data-color-mode="light">
            <MDEditor.Markdown source={auction.content} />
          </div>
        </>
      )}
    </>
  );
}
