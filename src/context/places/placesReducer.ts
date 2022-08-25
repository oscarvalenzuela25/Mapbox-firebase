import { PlaceState } from './PlacesProvider';
import { Feature } from '../../interfaces/places';

type PlacesAction =
  | { type: 'setUserLocation'; payload: [number, number] }
  | { type: 'setLoadingPlaces'; payload: undefined }
  | { type: 'setPlaces'; payload: Feature[] };

export const placesReducer = (
  state: PlaceState,
  { type, payload }: PlacesAction
): PlaceState => {
  switch (type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: payload,
      };
    case 'setLoadingPlaces':
      return {
        ...state,
        isLoadingPlaces: true,
        places: [],
      };
    case 'setPlaces':
      return {
        ...state,
        isLoadingPlaces: false,
        places: payload,
      };
    default:
      return state;
  }
};
