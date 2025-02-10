import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useEffect, useRef, useState } from "react";

export default function KakaoMap() {
  const mapRef = useRef<kakao.maps.Map>(null);
  const [mapType, setMapType] = useState<"roadmap" | "skyview">("roadmap");
  const [position, setPosition] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [center, setCenter] = useState({
    lat: 33.450701,
    lng: 126.570667,
  });
  const [address, setAddress] = useState<string>("");

  const adjustZoom = (delta: number) => {
    const map = mapRef.current;
    if (!map) return;
    const newLevel = map.getLevel() + delta;
    if (newLevel < 1 || newLevel > 10) return;
    map.setLevel(newLevel);
  };

  const zoomIn = () => adjustZoom(-1);
  const zoomOut = () => adjustZoom(1);

  const getAddressFromCoords = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].region_type === "H") {
            setAddress(result[i].address_name);
            break;
          }
        }
      }
    });
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }
  }, []);

  const handleMapClick = (
    _: kakao.maps.Map,
    mouseEvent: kakao.maps.event.MouseEvent
  ) => {
    const latlng = mouseEvent.latLng;
    setPosition({ lat: latlng.getLat(), lng: latlng.getLng() });
    getAddressFromCoords(latlng.getLat(), latlng.getLng());
  };

  return (
    <>
      <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg relative">
        <div className="absolute top-2 left-2 flex z-10 p-1 rounded-md ">
          <button
            className={`px-2 py-1 rounded-l-md text-white transition ${
              mapType === "roadmap" ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setMapType("roadmap")}
          >
            지도
          </button>
          <button
            className={`px-2 py-1 rounded-r-md text-white transition ${
              mapType === "skyview" ? "bg-blue-500" : "bg-gray-500"
            }`}
            onClick={() => setMapType("skyview")}
          >
            스카이뷰
          </button>
        </div>

        <Map
          id="map"
          center={center}
          className="w-full h-[350px] relative overflow-hidden rounded-lg"
          level={3}
          mapTypeId={mapType === "roadmap" ? "ROADMAP" : "HYBRID"}
          ref={mapRef}
          onClick={handleMapClick}
        >
          <MapMarker position={position ?? center} />
        </Map>

        <div className="absolute bottom-2 flex z-10 bg-white rounded-md shadow-md overflow-hidden">
          <button
            className="px-2 py-1 bg-white-400 hover:bg-gray-200"
            onClick={zoomIn}
          >
            +
          </button>
          <button
            className="px-2 py-1 bg-white-400 hover:bg-gray-200"
            onClick={zoomOut}
          >
            -
          </button>
        </div>
      </div>

      <p className="text-center text-gray-600 mt-4 font-semibold">
        지도를 클릭해주세요!
      </p>

      {address && (
        <div className="mt-4 p-2 bg-gray-100 rounded-md text-center">
          현재 위치의 행정구역: <span className="font-bold">{address}</span>
        </div>
      )}
    </>
  );
}
