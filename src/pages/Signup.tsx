import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/auth/signup", formdata)
      .then(() => navigate("/login"))
      .catch((error) => console.log(error.response.data));
  };

  return (
    <>
      <h1>signup page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          email :<input type="text" name="email" onChange={handleChange} />
        </label>
        <br />
        <label>
          password :
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <br />
        <button type="submit">제출하기</button>
      </form>
    </>
  );
}
