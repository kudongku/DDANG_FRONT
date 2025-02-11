import { useState } from "react";
import Header from "../components/Header";
import KakaoMap from "../components/KakaoMap";
import api from "../apis/api";
import { useNavigate } from "react-router-dom";

export default function LocationSetting() {
  const navigator = useNavigate();
  const [location, setLocation] = useState({
    address: import.meta.env.VITE_DEFAULT_ADDRESS,
    latitude: import.meta.env.VITE_DEFAULT_LATITUDE,
    longitude: import.meta.env.VITE_DEFAULT_LONGITUDE,
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
      <Header title="위치설정" />
      <KakaoMap location={location} setLocation={setLocation} />
      <div>
        <p>현재 위치: {location.address}</p>
        <p>위도: {location.latitude}</p>
        <p>경도: {location.longitude}</p>
      </div>
      <button onClick={handleSubmit} className="wideButton">
        제출하기
      </button>
    </>
  );
}
