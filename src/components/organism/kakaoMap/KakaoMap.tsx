import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useState } from 'react';

import MapTypeButton from './MapTypeButton';
import ZoonButton from './ZoonButton';
import FindMyLocationButton from './FindMyLocationButton';
import useLocationStore from '../../../stores/location';

export default function KakaoMap() {
  const { location, setLocation, mapType, zoomLevel } = useLocationStore();
  const [position, setPosition] = useState({
    lat: location.latitude,
    lng: location.longitude,
  });

  const getAddressFromCoords = (lat: number, lng: number) => {
    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.coord2RegionCode(lng, lat, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        for (let i = 0; i < result.length; i++) {
          if (result[i].region_type === 'H') {
            setLocation({
              address: result[i].address_name,
              latitude: result[i].x,
              longitude: result[i].y,
            });
            break;
          }
        }
      }
    });
  };

  const handleMapClick = (_: kakao.maps.Map, mouseEvent: kakao.maps.event.MouseEvent) => {
    const latlng = mouseEvent.latLng;
    setPosition({ lat: latlng.getLat(), lng: latlng.getLng() });
    getAddressFromCoords(latlng.getLat(), latlng.getLng());
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg relative">
      <MapTypeButton />
      <Map
        id="map"
        center={{ lat: location.longitude, lng: location.latitude }}
        className="w-full h-[350px] relative overflow-hidden rounded-lg"
        level={zoomLevel}
        mapTypeId={mapType === 'roadmap' ? 'ROADMAP' : 'HYBRID'}
        onClick={handleMapClick}
      >
        <MapMarker position={position} />
      </Map>
      <ZoonButton />
      <FindMyLocationButton />
    </div>
  );
}
