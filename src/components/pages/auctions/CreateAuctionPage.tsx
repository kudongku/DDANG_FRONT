import CreateAuctionContainer from '../../organism/auction/CreateAuctionContainer';
import Header from '../../molecule/Header';

export default function CreateAuction() {
  return (
    <>
      <Header title="경매 생성" />
      <CreateAuctionContainer />
    </>
  );
}
