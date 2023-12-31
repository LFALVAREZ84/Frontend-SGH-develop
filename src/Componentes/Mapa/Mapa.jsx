import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapaTucuman = () => {
  return (
    <MapContainer
      center={[-26.8081, -65.2176]} // Coordenadas de Tucumán
      zoom={14}
      style={{ height: '300px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-26.8081, -65.2176]} />
    </MapContainer>
  );
};

export default MapaTucuman;
 