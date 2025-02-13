import { useState } from "react";
import Header from "../components/Header";
import { createAuctionApi } from "../apis/auctions";
import { CreateAuctionRequest } from "../types";
import { useNavigate } from "react-router-dom";
import MDEditor from '@uiw/react-md-editor';

export default function CreateAuction() {
  const navigate = useNavigate();
  const [auction, setAuction] = useState<CreateAuctionRequest>({
    title: "",
    content: "",
  });

  const handleTitleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAuction({ ...auction, title: e.target.value });
  };

  const handleContentChange = (value?: string) => {
    setAuction({ ...auction, content: value || "" });
  };

  const handleCreateAuction = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await createAuctionApi(auction);
      navigate(`/auction/${data.auctionId}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Header title="경매 생성" />
      <form className="space-y-4" onSubmit={handleCreateAuction}>
        <label className="label">
          제목
          <input
            className="input"
            type="text"
            name="title"
            onChange={handleTitleChange}
            placeholder="제목을 입력하세요"
          />
        </label>

        <label className="label">
          설명
          <div className="container" data-color-mode="light">
            <MDEditor
                value={auction.content}
                onChange={handleContentChange}
                height={300}
                preview="edit"
            />
          </div>
        </label>

        <button className="wideButton blue" type="submit">
          경매 생성
        </button>
      </form>
    </>
  );
}
