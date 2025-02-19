import Header from '../components/molecule/Header';
import AuctionList from '../components/organism/auction/AuctionList';
import UserInfo from '../components/organism/UserInfo';

export default function Home() {
  return (
    <>
      <Header title="홈" />
      <UserInfo />
      <AuctionList />
    </>
  );
}
