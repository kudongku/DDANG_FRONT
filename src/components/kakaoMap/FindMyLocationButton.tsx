import useLocationStore from '../../stores/location';

export default function FindMyLocationButton() {
  const { setLocation } = useLocationStore();
  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          address: '',
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    } else {
      alert('위치 정보를 가져올 수 없습니다.');
    }
  };

  return (
    <div className="absolute bottom-2 right-2 flex z-10 bg-blue-400 rounded-md shadow-md overflow-hidden">
      <button className="px-4 py-1 hover:bg-blue-600" onClick={() => findMyLocation()}>
        🧭
      </button>
    </div>
  );
}
