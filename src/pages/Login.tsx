import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    // 회원가입 페이지로 이동하기
    navigate("/signup");
  };

  return (
    <>
      <h1>login page</h1>
      <button onClick={handleClick}>회원가입 하러 가기</button>
    </>
  );
}
