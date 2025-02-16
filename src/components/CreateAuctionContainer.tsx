import { connect } from 'react-redux';
import { changeTitle, changeContent } from '../modules/auctionCreaterModules';
import CreateAuction from './CreateAuction';
import { useNavigate } from 'react-router-dom';
import { createAuctionApi } from '../apis/auctions';

/**
 * container component
 * (데이터를 전달하고 이벤트를 처리하는 컴포넌트)
 */
const CreateAuctionContainer = ({
  title,
  content,
  onChangeTitle,
  onChangeContent,
}: {
  title: string;
  content: string;
  onChangeTitle: (title: string) => void;
  onChangeContent: (content: string) => void;
}) => {
  const navigate = useNavigate();

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

/**
 * mapStateToProps : 리덕스 스토어의 상태를 컴포넌트의 프롭스로 전달하는 함수
 * (리덕스 스토어의 상태를 컴포넌트의 프롭스로 전달)
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapStateToProps = (state: any) => ({
  title: state.auctionCreater.title,
  content: state.auctionCreater.content,
});

/**
 * mapDispatchToProps : 리덕스 스토어의 액션을 컴포넌트의 이벤트로 전달하는 함수
 * (리덕스 스토어의 액션을 컴포넌트의 이벤트로 전달)
 */
const mapDispatchToProps = {
  onChangeTitle: changeTitle,
  onChangeContent: changeContent,
};
/**
 * connect : 리덕스 스토어와 컴포넌트를 연결하는 함수
 * (리덕스 스토어의 상태를 컴포넌트의 프롭스로 전달)
 */
export default connect(mapStateToProps, mapDispatchToProps)(CreateAuctionContainer);
