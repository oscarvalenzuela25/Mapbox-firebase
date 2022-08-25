/* eslint import/no-webpack-loader-syntax: off */
import React, { useContext, useLayoutEffect, useRef } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import Loading from './Loading';
// @ts-ignore
// eslint-disable-next-line
import { Map } from '!mapbox-gl';
import { MapContext } from '../context/map/MapContext';

const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);
  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      setMap(
        new Map({
          container: mapDiv.current!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: userLocation,
          zoom: 14,
        })
      );
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
      }}
    ></div>
  );
};

export default MapView;
