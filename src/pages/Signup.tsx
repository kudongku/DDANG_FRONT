import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Signup() {
  const navigate = useNavigate();

  const [validateButton, activateValidateButton] = useState(false);
  const [emailValidation, setEmailValidation] = useState(false);
  const [error, setError] = useState("");
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      activateValidateButton(validateEmail(value));
    }

    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    axios
      .get(
        import.meta.env.VITE_BASE_UTL + `/auth/validate?email=${formdata.email}`
      )
      .then(({ data }) => {
        if (data.exist) {
          setError("존재하는 이메일입니다.");
        } else {
          setEmailValidation(!data.exist);
        }
      })
      .catch((error) => console.log(error));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(import.meta.env.VITE_BASE_UTL + "/auth/signup", formdata)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
        setError(error.response?.data?.message || "회원가입 실패");
      });
  };

  return (
    <>
      <Header title="회원가입" />
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
          <button
            className="ml-2 mt-2 text-sm text-gray-600 hover:underline"
            onClick={handleClick}
            disabled={!validateButton}
          >
            확인하기
          </button>
        </label>
        <br />
        <br />

        <label className="label">
          비밀번호
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            disabled={!emailValidation}
          />
        </label>

        <label className="label">
          비밀번호 확인
          <input
            className="input"
            type="password"
            name="password"
            onChange={handleChange}
            disabled={!emailValidation}
          />
        </label>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          className="wideButton"
          onClick={handleSubmit}
          disabled={!emailValidation}
        >
          제출하기
        </button>
      </form>
    </>
  );
}
