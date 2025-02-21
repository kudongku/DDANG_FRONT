import MDEditor from '@uiw/react-md-editor';

interface CreateAuctionProps {
  title: string;
  content: string;
  onChangeTitle: (title: string) => void;
  onChangeContent: (content: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateAuction = ({
  title,
  content,
  onChangeTitle,
  onChangeContent,
  onSubmit,
}: CreateAuctionProps) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <label className="label">
        제목
        <input
          className="input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => onChangeTitle(e.target.value)}
          placeholder="제목을 입력하세요"
        />
      </label>
      <br />
      <br />

      <label className="label">
        설명
        <div data-color-mode="light">
          <MDEditor
            height={300}
            textareaProps={{
              placeholder: '내용을 입력하세요',
            }}
            value={content}
            onChange={(value) => onChangeContent(value || '')}
            preview="edit"
          />
        </div>
      </label>

      <button className="wideButton blue" type="submit">
        경매 생성
      </button>
    </form>
  );
};

export default CreateAuction;
