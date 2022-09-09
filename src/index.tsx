/* eslint import/no-webpack-loader-syntax: off */
import React from 'react';
import ReactDOM from 'react-dom/client';
import MapsApp from './MapsApp';

console.log(process.env.REACT_APP_ENVIROMENT);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if (!navigator.geolocation) {
  alert('Tu navegador no tiene opcion de Geolocalizacion');
  throw new Error('Tu navegador no tiene opcion de Geolocalizacion');
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);
