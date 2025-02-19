import Header from '../../components/molecule/Header';
import CreateAuctionContainer from '../../components/organism/auction/CreateAuctionContainer';

export default function CreateAuction() {
  return (
    <>
      <Header title="경매 생성" />
      <CreateAuctionContainer />
    </>
  );
}
