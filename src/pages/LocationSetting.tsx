import { useState } from "react";
import Header from "../components/Header";
import KakaoMap from "../components/KakaoMap";
import api from "../apis/api";
import { useNavigate } from "react-router-dom";

export default function LocationSetting() {
  const navigator = useNavigate();
  const [location, setLocation] = useState({
    address: "",
    x: 127,
    y: 37,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { status } = await api.post("/users/location", location);
    if (status == 200) {
      navigator("/");
    }
  };
  return (
    <>
      <Header title="회원가입" />
      <KakaoMap setLocation={setLocation} />
      <div>
        <p>현재 위치: {location.address}</p>
        <p>위도: {location.y}</p>
        <p>경도: {location.x}</p>
      </div>
      <button onClick={handleSubmit} className="wideButton">
        제출하기
      </button>
    </>
  );
}
