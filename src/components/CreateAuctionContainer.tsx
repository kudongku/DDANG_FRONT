/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector, useDispatch } from 'react-redux';
import { changeTitle, changeContent } from '../modules/auctionCreaterModules';
import CreateAuction from './CreateAuction';
import { useNavigate } from 'react-router-dom';
import { createAuctionApi } from '../apis/auctions';
import { useCallback } from 'react';

/**
 * container component
 * (데이터를 전달하고 이벤트를 처리하는 컴포넌트)
 */
const CreateAuctionContainer = () => {
  const navigate = useNavigate();

  const title = useSelector(
    (state: { auctionCreater: { title: string } }) => state.auctionCreater.title
  );
  const content = useSelector(
    (state: { auctionCreater: { content: string } }) => state.auctionCreater.content
  );

  const dispatch = useDispatch();
  const onChangeTitle = useCallback(
    (title: string) => {
      dispatch(changeTitle(title) as any);
    },
    [dispatch]
  );
  const onChangeContent = useCallback(
    (content: string) => {
      dispatch(changeContent(content) as any);
    },
    [dispatch]
  );

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
};

export default CreateAuctionContainer;
