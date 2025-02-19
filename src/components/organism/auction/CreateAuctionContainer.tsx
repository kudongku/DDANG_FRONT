import { useSelector } from 'react-redux';
import {
  changeTitle,
  changeContent,
  AuctionCreaterState,
  createAuctionAsync,
} from '../../../modules/auctionCreaterModules';
import CreateAuction from './CreateAuction';
import { useNavigate } from 'react-router-dom';
import useActions from '../../../hooks/useActions';

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
  const loading = useSelector((state: AuctionCreaterState) => state.auctionCreater.loading);
  const error = useSelector((state: AuctionCreaterState) => state.auctionCreater.error);

  // 액션 디스패치
  const [onChangeTitle, onChangeContent, onCreateAuction] = useActions([
    changeTitle,
    changeContent,
    createAuctionAsync,
  ]);

  const handleCreateAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { payload } = await onCreateAuction({ title, content });
      navigate(`/auction/${payload.auctionId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {loading ? (
        <span className="ml-4 text-lg font-medium text-gray-600">로딩중...</span>
      ) : (
        <CreateAuction
          title={title}
          content={content}
          onChangeTitle={onChangeTitle}
          onChangeContent={onChangeContent}
          onSubmit={handleCreateAuction}
        />
      )}
      {error && <div className="text-red-500">{error}</div>}
    </>
  );
}
