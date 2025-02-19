import useLocationStore from '../../stores/location';

export default function ZoonButton() {
  const { zoomLevel, setZoomLevel } = useLocationStore();
  const zoomIn = () => {
    if (zoomLevel < 10) {
      setZoomLevel(zoomLevel + 1);
    }
  };
  const zoomOut = () => {
    if (zoomLevel > 1) {
      setZoomLevel(zoomLevel - 1);
    }
  };
  return (
    <div className="absolute bottom-2 flex z-10 bg-white rounded-md shadow-md overflow-hidden">
      <button className="px-2 py-1 bg-white-400 hover:bg-gray-200" onClick={zoomOut}>
        +
      </button>
      <button className="px-2 py-1 bg-white-400 hover:bg-gray-200" onClick={zoomIn}>
        -
      </button>
    </div>
  );
}
