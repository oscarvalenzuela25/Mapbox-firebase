/* eslint import/no-webpack-loader-syntax: off */
import { MapState } from './MapProvider';
// @ts-ignore
// eslint-disable-next-line
import { Map, Marker } from '!mapbox-gl';

type MapReducerType =
  | { type: 'setMap'; payload: Map }
  | { type: 'setMarkers'; payload: Marker[] };

const MapReducer = (
  state: MapState,
  { type, payload }: MapReducerType
): MapState => {
  switch (type) {
    case 'setMap':
      return {
        ...state,
        isMapReady: true,
        map: payload,
      };
    case 'setMarkers':
      return {
        ...state,
        markers: payload,
      };
    default:
      return { ...state };
  }
};

export default MapReducer;
