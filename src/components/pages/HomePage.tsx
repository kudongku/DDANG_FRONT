import Header from '../molecule/Header';
import AuctionList from '../organism/auction/AuctionList';
import UserInfo from '../organism/UserInfo';

export default function Home() {
  return (
    <>
      <Header title="홈" />
      <UserInfo />
      <AuctionList />
    </>
  );
}
