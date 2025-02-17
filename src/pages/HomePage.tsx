import { useEffect, useState } from 'react';
import Header from '../components/Header';
import { AuthUserInfoResponse, AuctionListResponse } from '../types';
import GrayBanner from '../components/GrayBanner';
import { getAuctionListApi, getUserInfoApi } from '../apis';
import AuctionThumbnail from '../components/AuctionThumbnail';

export default function Home() {
  const [userInfo, setUserInfo] = useState<AuthUserInfoResponse>({
    email: '',
    address: '',
  });

  const [auctions, setAuctions] = useState<AuctionListResponse>({
    auctions: [],
  });

  useEffect(() => {
    getUserInfoApi()
      .then((data) => {
        setUserInfo(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    getAuctionListApi().then((data) => {
      setAuctions(data);
    });
  }, []);

  return (
    <>
      <Header title="홈" />
      <GrayBanner>
        <span className="font-semibold">{userInfo.email}</span>님,
        <br />
        <span className="font-semibold">{userInfo.address}</span> 근처의 경매들입니다.
      </GrayBanner>
      <div className="flex flex-col gap-4 p-4">
        {auctions.auctions.map((auction) => (
          <AuctionThumbnail key={auction.auctionId} auction={auction} />
        ))}
      </div>
    </>
  );
}
