import { useSelector } from 'react-redux';
import { changeTitle, changeContent, AuctionCreaterState } from '../modules/auctionCreaterModules';
import CreateAuction from './CreateAuction';
import { useNavigate } from 'react-router-dom';
import { createAuctionApi } from '../apis/auctions';
import useActions from '../lib/useActions';
/**
 * container component
 * (데이터를 전달하고 이벤트를 처리하는 컴포넌트)
 *
 * redux 스토어에 접근하여
 * 1. 상태를 조회하고,
 * 2. 액션을 디스패치해줌
 */
export default function CreateAuctionContainer() {
  const navigate = useNavigate();

  // 상태 조회
  const title = useSelector((state: AuctionCreaterState) => state.auctionCreater.title);
  const content = useSelector((state: AuctionCreaterState) => state.auctionCreater.content);

  // 액션 디스패치
  const [onChangeTitle, onChangeContent] = useActions([changeTitle, changeContent]);

  const handleCreateAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await createAuctionApi({
        title,
        content,
      });
      onChangeTitle('');
      onChangeContent('');
      navigate(`/auction/${data.auctionId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CreateAuction
      title={title}
      content={content}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onSubmit={handleCreateAuction}
    />
  );
}
