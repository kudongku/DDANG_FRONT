import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    setError("");

    axios
      .get(`http://localhost:8080/api/auth/validate?email=${formdata.email}`)
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
      .post("http://localhost:8080/api/auth/signup", formdata)
      .then(() => navigate("/login"))
      .catch((error) => {
        console.log(error);
        setError(error.response?.data?.message || "회원가입 실패");
      });
  };

  return (
    <>
      <h1>signup page</h1>
      <form>
        <div>
          <label>
            email :
            <br />
            <input type="text" name="email" onChange={handleChange} />
          </label>
          <button onClick={handleClick} disabled={!validateButton}>
            확인하기
          </button>
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
    </>
  );
}
