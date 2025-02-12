import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HrOrHr from "../components/HrOrHr";
import KakaoLoginImg from "../components/KakaoLoginImg";
import Header from "../components/Header";
import { loginApi } from "../apis/auth";

export default function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailValidation, setEmailValidation] = useState(false);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmailValidation(validateEmail(value));
    }

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginApi(formdata)
      .then((data) => {
        localStorage.setItem("accessToken", data.tokenType + data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response?.data || "로그인 실패");
      });
  };

  return (
    <>
      <Header title={"로그인"} />
      <form className="space-y-4">
        <label className="label">
          이메일
          <input
            className="input"
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="이메일을 입력하세요"
          />
        </label>

        <label className="label">
          비밀번호
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="비밀번호를 입력하세요"
            disabled={!emailValidation}
          />
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          onClick={handleSubmit}
          disabled={!emailValidation}
          className="wideButton"
        >
          이메일로 로그인
        </button>
      </form>

      <Link
        to="/signup"
        className="inline-flex justify-between items-center mt-4 text-sm text-gray-600 hover:underline"
      >
        회원가입 하러 가기
      </Link>
      <HrOrHr />
      <KakaoLoginImg />
    </>
  );
}
