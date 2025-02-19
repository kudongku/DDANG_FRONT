import { useNavigate } from 'react-router-dom';
import { setLocationApi } from '../../apis';
import useLocationStore from '../../stores/location';
import GrayBanner from '../molecule/GrayBanner';
import Header from '../molecule/Header';
import KakaoMap from '../organism/kakaoMap/KakaoMap';

export default function LocationSetting() {
  const navigator = useNavigate();
  const { location, zoomLevel } = useLocationStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (location.address === '') {
      alert('위치를 선택해주세요!');
      return;
    }

    const { status } = await setLocationApi(location);
    if (status == 200) {
      navigator('/');
    }
  };
  return (
    <>
      <Header title="위치설정" />
      <KakaoMap />
      <p className="text-center text-gray-600 mt-4 font-semibold">지도를 클릭해주세요!</p>
      <GrayBanner>
        <p>현재 위치: {location.address}</p>
        <p>위도: {location.latitude}</p>
        <p>경도: {location.longitude}</p>
        <p>확대 레벨: {zoomLevel}</p>
      </GrayBanner>
      <button onClick={handleSubmit} className="wideButton blue">
        제출하기
      </button>
    </>
  );
}
