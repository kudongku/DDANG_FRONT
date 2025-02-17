import { useState } from 'react';
import Header from '../components/Header';
import KakaoMap from '../components/KakaoMap';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_ADDRESS, DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../constants';
import { LocationType } from '../types';
import { setLocationApi } from '../apis';

export default function LocationSetting() {
  const navigator = useNavigate();
  const [location, setLocation] = useState<LocationType>({
    address: DEFAULT_ADDRESS,
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { status } = await setLocationApi(location);
    if (status == 200) {
      navigator('/');
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
      <button onClick={handleSubmit} className="wideButton blue">
        제출하기
      </button>
    </>
  );
}
