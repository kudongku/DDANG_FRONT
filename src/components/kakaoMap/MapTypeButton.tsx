import useLocationStore from '../../stores/location';

export default function MapTypeButton() {
  const { mapType, setMapType } = useLocationStore();

  return (
    <div className="absolute top-2 left-2 flex z-10 p-1 shadow-md rounded-md overflow-hidden">
      <button
        className={`px-2 py-1 rounded-l-md text-white transition ${
          mapType === 'roadmap' ? 'bg-blue-500' : 'bg-gray-500'
        }`}
        onClick={() => setMapType('roadmap')}
      >
        지도
      </button>
      <button
        className={`px-2 py-1 rounded-r-md text-white transition ${
          mapType === 'skyview' ? 'bg-blue-500' : 'bg-gray-500'
        }`}
        onClick={() => setMapType('skyview')}
      >
        스카이뷰
      </button>
    </div>
  );
}
