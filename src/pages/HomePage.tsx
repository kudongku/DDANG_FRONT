import Header from '../components/Header';
import AuctionList from '../components/auction/AuctionList';
import UserInfo from '../components/UserInfo';

export default function Home() {
  return (
    <>
      <Header title="홈" />
      <UserInfo />
      <AuctionList />
    </>
  );
}
