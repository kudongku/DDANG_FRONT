import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    axios
      .post("http://localhost:8080/api/auth/login", formdata)
      .then(({ data }) => {
        localStorage.setItem("accessToken", data.tokenType + data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setError(error.response?.data || "로그인 실패");
      });
  };

  return (
    <>
      <h1>login page</h1>

      <div>
        <form>
          <div>
            <label>
              email :
              <br />
              <input type="text" name="email" onChange={handleChange} />
            </label>
          </div>

          <div>
            <label>
              password :
              <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                disabled={!emailValidation}
              />
            </label>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleSubmit} disabled={!emailValidation}>
            제출하기
          </button>
        </form>
        <button onClick={() => navigate("/signup")}>회원가입 하러 가기</button>
      </div>

      <img
        src="../kakao_login_large_wide.png"
        alt="Kakao Login"
        onClick={() =>
          (window.location.href =
            "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=29a089c74cde92fa81e35560d1f6f555&redirect_uri=http://localhost:5173/auth/kakao")
        }
      />
    </>
  );
}
