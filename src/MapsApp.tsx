import React, { useEffect, useState } from 'react';
import { PlacesProvider } from './context/places/PlacesProvider';
import HomeScreen from './screens/HomeScreen';
import { MapProvider } from './context/map/MapProvider';
// @ts-ignore
// eslint-disable-next-line
import mapboxgl from '!mapbox-gl';
import { getDbRef } from './firebase/fbConfig';
import { onValue } from 'firebase/database';

const MapsApp = () => {
  const starCountRef = getDbRef('/env');
  const [envs, setEnvs] = useState({
    mapBoxApiKey: '',
  });

  useEffect(() => {
    onValue(starCountRef, snapshot => {
      const { mapBoxApiKey } = snapshot?.val();
      setEnvs({ ...envs, mapBoxApiKey });
    });
  }, []);

  useEffect(() => {
    if (envs.mapBoxApiKey) {
      mapboxgl.accessToken = envs.mapBoxApiKey;
    }
  }, [envs]);

  if (!envs.mapBoxApiKey) return null;

  return (
    <PlacesProvider>
      <MapProvider>
        <HomeScreen />
      </MapProvider>
    </PlacesProvider>
  );
};

export default MapsApp;
