import { create } from 'zustand';
import { LocationType } from '../types';
import { DEFAULT_ADDRESS, DEFAULT_LATITUDE, DEFAULT_LONGITUDE } from '../constants';

interface LocationStore {
  location: LocationType;
  mapType: 'roadmap' | 'skyview';
  zoomLevel: number;
  setLocation: (location: LocationType) => void;
  setMapType: (mapType: 'roadmap' | 'skyview') => void;
  setZoomLevel: (zoomLevel: number) => void;
}

const useLocationStore = create<LocationStore>((set) => ({
  location: {
    address: DEFAULT_ADDRESS,
    latitude: DEFAULT_LATITUDE,
    longitude: DEFAULT_LONGITUDE,
  },
  mapType: 'roadmap',
  zoomLevel: 3,
  setLocation: (location: LocationType) => set({ location }),
  setMapType: (mapType: 'roadmap' | 'skyview') => set({ mapType }),
  setZoomLevel: (zoomLevel: number) => set({ zoomLevel }),
}));

export default useLocationStore;
