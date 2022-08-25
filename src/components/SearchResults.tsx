import React, { useContext, useState } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import LoadingPlaces from './LoadingPlaces';
import { MapContext } from './../context/map/MapContext';
import { Feature } from '../interfaces/places';

const SearchResults = () => {
  const { places, isLoadingPlaces, userLocation } = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activeId, setActiveId] = useState('');

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActiveId(place.id);
    map?.flyTo({
      zoom: 14,
      center: [lng, lat],
    });
  };

  const getRoute = (place: Feature) => {
    const [lng, lat] = place.center;
    getRouteBetweenPoints(userLocation!, [lng, lat]);
  };

  if (isLoadingPlaces) return <LoadingPlaces />;

  if (places.length === 0) return <></>;
  return (
    <ul className="list-group mt-2">
      {places.map(place => (
        <li
          key={place.id}
          className={`list-group-item list-group-item-action pointer ${
            place.id === activeId ? 'active' : ''
          }`}
          onClick={() => onPlaceClicked(place)}
        >
          <h6>{place.text}</h6>
          <p style={{ fontSize: 12 }}>{place.place_name}</p>
          <button
            className={`btn btn-sm ${
              place.id === activeId
                ? 'btn-outline-light'
                : 'btn-outline-primary'
            }`}
            onClick={() => getRoute(place)}
          >
            Direcciones
          </button>
        </li>
      ))}
    </ul>
  );
};

export default SearchResults;
