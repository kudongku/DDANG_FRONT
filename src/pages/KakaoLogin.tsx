import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function KakaoLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get("code");

  axios
    .get(`http://localhost:8080/api/auth/authorization/kakao?code=${code}`)
    .then(({ data }) => {
      console.log(data);
      localStorage.setItem("accessToken", data.token);
      navigate("/");
    })
    .catch(() => navigate("/login"));

  return <div>loading...</div>;
}
